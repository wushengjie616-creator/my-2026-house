import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { ACESFilmicToneMapping } from 'three'
import { World } from '../scene/World'

interface SceneCanvasProps {
  onReady: () => void
}

/**
 * 只负责创建 Three.js Canvas，不包含任何具体场景内容。
 * 场景第一次渲染完成后通过 onReady 通知上层，用来关掉 Loading。
 */
export function SceneCanvas({ onReady }: SceneCanvasProps) {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [8.5, 6.5, 11], fov: 42, near: 0.1, far: 120 }}
      gl={{ antialias: true, toneMapping: ACESFilmicToneMapping }}
      onCreated={onReady}
      style={{ position: 'fixed', inset: 0 }}
    >
      <Suspense fallback={null}>
        <World />
      </Suspense>
    </Canvas>
  )
}
