import { palette } from '../../utils/palette'
import { InteractiveObject } from '../../interactions/InteractiveObject'
import { useInteraction } from '../../interactions/interactionContext'

interface StudyProps {
  position?: [number, number, number]
}

const BOOKS: [number, number, number, string][] = [
  [-0.45, 0.16, 0.32, palette.plant],
  [-0.28, 0.14, 0.28, palette.blanket],
  [-0.11, 0.18, 0.36, palette.rugInner],
  [0.08, 0.13, 0.26, palette.cream],
  [0.26, 0.17, 0.34, '#c9a26b'],
  [-0.45, 0.7, 0.3, palette.skyDusk],
  [-0.28, 0.68, 0.26, palette.rug],
  [-0.11, 0.72, 0.34, '#b58a6a'],
  [0.08, 0.67, 0.28, palette.plantDark],
  [0.26, 0.7, 0.3, '#d8a39c'],
]

export function Study({ position = [0, 0, 0] }: StudyProps) {
  const { openPanel } = useInteraction()

  return (
    <group position={position}>
      {/* 书桌 */}
      <group position={[0.5, 0, -1.4]}>
        <mesh position={[0, 0.72, 0]} castShadow receiveShadow>
          <boxGeometry args={[1.9, 0.06, 0.8]} />
          <meshStandardMaterial color={palette.woodLight} roughness={0.6} />
        </mesh>
        {([[-0.85, -0.3], [0.85, -0.3], [-0.85, 0.3], [0.85, 0.3]] as const).map(
          ([x, z], i) => (
            <mesh key={i} position={[x, 0.36, z]} castShadow>
              <boxGeometry args={[0.07, 0.72, 0.07]} />
              <meshStandardMaterial color={palette.woodDark} roughness={0.7} />
            </mesh>
          ),
        )}
      </group>

      {/* 电脑（可交互）：放在桌面上，点击打开 My 2026 Desktop */}
      <InteractiveObject
        id="computer"
        label="Computer"
        position={[0.5, 0.75, -1.4]}
        onInteract={() => openPanel('desktop')}
      >
        <mesh position={[0, 0.02, 0]} castShadow>
          <boxGeometry args={[0.12, 0.05, 0.1]} />
          <meshStandardMaterial color={palette.metal} roughness={0.5} />
        </mesh>
        <mesh position={[0, 0.28, 0]}>
          <boxGeometry args={[0.7, 0.5, 0.05]} />
          <meshStandardMaterial color="#2f2a3a" roughness={0.4} />
        </mesh>
        <mesh position={[0, 0.28, 0.03]}>
          <boxGeometry args={[0.64, 0.44, 0.02]} />
          <meshStandardMaterial
            color="#d8e6ea"
            emissive="#b8c8cc"
            emissiveIntensity={0.4}
            roughness={0.3}
          />
        </mesh>
        <mesh position={[0, 0.02, 0.25]} castShadow>
          <boxGeometry args={[0.4, 0.03, 0.14]} />
          <meshStandardMaterial color={palette.metal} roughness={0.6} />
        </mesh>
      </InteractiveObject>

      {/* 学业手账（可交互）：放在书桌上，电脑左侧 */}
      <InteractiveObject
        id="study-journal"
        label="Study Journal"
        position={[-0.15, 0.78, -1.4]}
        onInteract={() => openPanel('academic')}
      >
        <mesh position={[0, 0, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.32, 0.045, 0.44]} />
          <meshStandardMaterial color="#8fae8a" roughness={0.85} />
        </mesh>
        <mesh position={[0, 0, 0.21]}>
          <boxGeometry args={[0.3, 0.05, 0.03]} />
          <meshStandardMaterial color="#fbf6ec" roughness={0.9} />
        </mesh>
        <mesh position={[0.02, 0.024, 0.02]}>
          <boxGeometry args={[0.16, 0.02, 0.12]} />
          <meshStandardMaterial color="#fbf6ec" roughness={0.9} />
        </mesh>
      </InteractiveObject>

      {/* 工作证（可交互）：放在书桌上，电脑右侧 */}
      <InteractiveObject
        id="work-badge"
        label="2026 Internship"
        position={[1.05, 0.75, -1.3]}
        onInteract={() => openPanel('internship')}
      >
        <mesh position={[0, 0.15, 0]} castShadow>
          <boxGeometry args={[0.22, 0.3, 0.02]} />
          <meshStandardMaterial color="#f2ead8" roughness={0.8} />
        </mesh>
        <mesh position={[0, 0.24, 0.012]}>
          <boxGeometry args={[0.14, 0.12, 0.004]} />
          <meshStandardMaterial color="#b9c6cc" roughness={0.85} />
        </mesh>
        <mesh position={[0, 0.07, 0.012]}>
          <boxGeometry args={[0.22, 0.035, 0.004]} />
          <meshStandardMaterial color="#c9a983" roughness={0.8} />
        </mesh>
        <mesh position={[0, 0.3, -0.015]}>
          <torusGeometry args={[0.055, 0.007, 8, 24]} />
          <meshStandardMaterial color="#c8b69a" roughness={0.9} />
        </mesh>
      </InteractiveObject>

      {/* 椅子：面向书桌 */}
      <group position={[0.5, 0, -0.6]}>
        <mesh position={[0, 0.45, 0]} castShadow>
          <boxGeometry args={[0.5, 0.08, 0.5]} />
          <meshStandardMaterial color={palette.wood} roughness={0.7} />
        </mesh>
        <mesh position={[0, 0.8, 0.23]} castShadow>
          <boxGeometry args={[0.5, 0.6, 0.08]} />
          <meshStandardMaterial color={palette.wood} roughness={0.7} />
        </mesh>
        {([[-0.22, -0.22], [0.22, -0.22], [-0.22, 0.22], [0.22, 0.22]] as const).map(
          ([x, z], i) => (
            <mesh key={i} position={[x, 0.2, z]} castShadow>
              <boxGeometry args={[0.06, 0.4, 0.06]} />
              <meshStandardMaterial color={palette.woodDark} roughness={0.7} />
            </mesh>
          ),
        )}
      </group>

      {/* 书架（可交互）：靠左墙 */}
      <InteractiveObject id="bookshelf" label="Bookshelf" position={[-1.25, 0, 0.4]}>
        <mesh position={[0, 1, 0]} castShadow receiveShadow>
          <boxGeometry args={[1.3, 2, 0.4]} />
          <meshStandardMaterial color={palette.wood} roughness={0.7} />
        </mesh>
        <mesh position={[0, 0.55, 0]}>
          <boxGeometry args={[1.2, 0.04, 0.32]} />
          <meshStandardMaterial color={palette.woodLight} roughness={0.7} />
        </mesh>
        <mesh position={[0, 1.35, 0]}>
          <boxGeometry args={[1.2, 0.04, 0.32]} />
          <meshStandardMaterial color={palette.woodLight} roughness={0.7} />
        </mesh>
        {BOOKS.map(([x, y, h, color], i) => (
          <mesh key={i} position={[x, y, 0.12]} castShadow>
            <boxGeometry args={[0.12, h, 0.18]} />
            <meshStandardMaterial color={color} roughness={0.85} />
          </mesh>
        ))}
      </InteractiveObject>
    </group>
  )
}
