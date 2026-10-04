import { useRef, useState } from 'react'
import type { ReactNode } from 'react'
import * as THREE from 'three'
import type { Group, Mesh, MeshStandardMaterial } from 'three'
import { useFrame } from '@react-three/fiber'
import { Html, useCursor } from '@react-three/drei'
import { useInteraction } from './interactionContext'
import { getHouseContent } from '../data/houseContent2026'

const HOVER_EMISSIVE = new THREE.Color('#6a4a26')
const HOVER_EMISSIVE_INTENSITY = 0.45
const HOVER_SCALE = 1.04
const SCALE_SPEED = 8

interface InteractiveObjectProps {
  /** 对应 houseContent2026 里的内容 id。 */
  id: string
  /** hover 时浮在上方的小标签文字。 */
  label: string
  /** 可选：自定义点击行为。不传时默认弹出该 id 的信息卡。 */
  onInteract?: () => void
  position?: [number, number, number]
  children?: ReactNode
}

/**
 * 把任意一组几何体包装成「可交互对象」。
 * 统一提供：hover 光标变化 + 材质轻微发光 + 轻微放大 + 悬浮标签 + 点击回调。
 *
 * 家具组件不需要自己写任何交互逻辑，只要：
 *   <InteractiveObject id="computer" label="Computer">…几何体…</InteractiveObject>
 */
export function InteractiveObject({
  id,
  label,
  onInteract,
  position,
  children,
}: InteractiveObjectProps) {
  const groupRef = useRef<Group>(null)
  const [hovered, setHovered] = useState(false)
  const [labelY, setLabelY] = useState(1.5)
  const { select } = useInteraction()
  const originals = useRef(
    new Map<MeshStandardMaterial, { emissive: THREE.Color; intensity: number }>(),
  )

  useCursor(hovered)

  const setTint = (on: boolean) => {
    const group = groupRef.current
    if (!group) return
    group.traverse((object) => {
      if (!(object as Mesh).isMesh) return
      const mesh = object as Mesh
      const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material]
      for (const material of materials) {
        if (!(material instanceof THREE.MeshStandardMaterial)) continue
        if (on) {
          if (!originals.current.has(material)) {
            originals.current.set(material, {
              emissive: material.emissive.clone(),
              intensity: material.emissiveIntensity,
            })
            material.emissive.copy(HOVER_EMISSIVE)
            material.emissiveIntensity = HOVER_EMISSIVE_INTENSITY
          }
        } else {
          const original = originals.current.get(material)
          if (original) {
            material.emissive.copy(original.emissive)
            material.emissiveIntensity = original.intensity
            originals.current.delete(material)
          }
        }
      }
    })
  }

  useFrame((_, delta) => {
    const group = groupRef.current
    if (!group) return
    const target = hovered ? HOVER_SCALE : 1
    const next = THREE.MathUtils.damp(group.scale.x, target, SCALE_SPEED, delta)
    group.scale.setScalar(next)
  })

  return (
    <group
      ref={groupRef}
      position={position}
      onPointerOver={(event) => {
        event.stopPropagation()
        setHovered(true)
        setTint(true)
        const group = groupRef.current
        if (group) {
          const box = new THREE.Box3().setFromObject(group)
          setLabelY(box.getSize(new THREE.Vector3()).y + 0.25)
        }
      }}
      onPointerOut={() => {
        setHovered(false)
        setTint(false)
      }}
      onClick={(event) => {
        event.stopPropagation()
        if (onInteract) onInteract()
        else select(getHouseContent(id))
      }}
    >
      {children}
      {hovered && (
        <Html
          position={[0, labelY, 0]}
          center
          zIndexRange={[30, 0]}
          style={{ pointerEvents: 'none' }}
        >
          <span className="interact-tooltip__label">{label}</span>
        </Html>
      )}
    </group>
  )
}
