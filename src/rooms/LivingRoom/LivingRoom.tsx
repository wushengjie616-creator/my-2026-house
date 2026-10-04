import { palette } from '../../utils/palette'
import { InteractiveObject } from '../../interactions/InteractiveObject'
import { useInteraction } from '../../interactions/interactionContext'
import { FloorLamp } from './FloorLamp'

interface LivingRoomProps {
  position?: [number, number, number]
}

export function LivingRoom({ position = [0, 0, 0] }: LivingRoomProps) {
  const { openPanel } = useInteraction()

  return (
    <group position={position}>
      {/* 电视（可交互）：靠后墙，屏幕朝向镜头 */}
      <InteractiveObject id="tv" label="TV" position={[0, 0, -1.65]}>
        <mesh position={[0, 0.25, 0]} castShadow receiveShadow>
          <boxGeometry args={[1.6, 0.5, 0.5]} />
          <meshStandardMaterial color={palette.wood} roughness={0.7} />
        </mesh>
        <mesh position={[0, 0.85, 0.06]} castShadow>
          <boxGeometry args={[1.3, 0.75, 0.08]} />
          <meshStandardMaterial color="#2f2a3a" roughness={0.4} />
        </mesh>
        <mesh position={[0, 0.85, 0.11]}>
          <boxGeometry args={[1.22, 0.67, 0.02]} />
          <meshStandardMaterial
            color="#d9c9a8"
            emissive="#c9b691"
            emissiveIntensity={0.4}
            roughness={0.3}
          />
        </mesh>
      </InteractiveObject>

      {/* 沙发：背对镜头，面向电视 */}
      <group position={[0, 0, 1.15]}>
        <mesh position={[0, 0.4, 0]} castShadow receiveShadow>
          <boxGeometry args={[1.9, 0.35, 0.75]} />
          <meshStandardMaterial color={palette.cream} roughness={0.95} />
        </mesh>
        <mesh position={[0, 0.72, 0.35]} castShadow>
          <boxGeometry args={[1.9, 0.55, 0.2]} />
          <meshStandardMaterial color={palette.cream} roughness={0.95} />
        </mesh>
        <mesh position={[-0.95, 0.55, 0]} castShadow>
          <boxGeometry args={[0.2, 0.5, 0.75]} />
          <meshStandardMaterial color={palette.woodLight} roughness={0.8} />
        </mesh>
        <mesh position={[0.95, 0.55, 0]} castShadow>
          <boxGeometry args={[0.2, 0.5, 0.75]} />
          <meshStandardMaterial color={palette.woodLight} roughness={0.8} />
        </mesh>
        <mesh position={[-0.45, 0.62, 0.15]} castShadow>
          <boxGeometry args={[0.6, 0.3, 0.18]} />
          <meshStandardMaterial color={palette.blanket} roughness={0.95} />
        </mesh>
        <mesh position={[0.45, 0.62, 0.15]} castShadow>
          <boxGeometry args={[0.6, 0.3, 0.18]} />
          <meshStandardMaterial color={palette.rugInner} roughness={0.95} />
        </mesh>
      </group>

      {/* 茶几 */}
      <group position={[0, 0, -0.1]}>
        <mesh position={[0, 0.4, 0]} castShadow receiveShadow>
          <boxGeometry args={[1.1, 0.06, 0.6]} />
          <meshStandardMaterial color={palette.woodLight} roughness={0.6} />
        </mesh>
        {([[-0.45, -0.22], [0.45, -0.22], [-0.45, 0.22], [0.45, 0.22]] as const).map(
          ([x, z], i) => (
            <mesh key={i} position={[x, 0.2, z]} castShadow>
              <boxGeometry args={[0.06, 0.4, 0.06]} />
              <meshStandardMaterial color={palette.woodDark} roughness={0.7} />
            </mesh>
          ),
        )}
      </group>

      {/* 旅行相册（可交互）：放在茶几上 */}
      <InteractiveObject
        id="travel"
        label="Travel Album"
        position={[0, 0.47, -0.1]}
        onInteract={() => openPanel('travel')}
      >
        <mesh position={[0, 0, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.46, 0.07, 0.6]} />
          <meshStandardMaterial color="#f0e6d2" roughness={0.85} />
        </mesh>
        <mesh position={[0, 0.005, 0.02]}>
          <boxGeometry args={[0.44, 0.06, 0.56]} />
          <meshStandardMaterial color="#fbf6ec" roughness={0.9} />
        </mesh>
        <mesh position={[0, 0.036, 0]}>
          <boxGeometry args={[0.46, 0.02, 0.34]} />
          <meshStandardMaterial color="#a8bf9c" roughness={0.9} />
        </mesh>
        <mesh position={[0, 0.037, 0.1]}>
          <boxGeometry args={[0.12, 0.014, 0.08]} />
          <meshStandardMaterial color="#d9a97e" roughness={0.9} />
        </mesh>
      </InteractiveObject>

      {/* 地毯 */}
      <group position={[0, 0.03, 0.4]}>
        <mesh receiveShadow>
          <cylinderGeometry args={[1.4, 1.4, 0.04, 40]} />
          <meshStandardMaterial color={palette.rug} roughness={1} />
        </mesh>
        <mesh position={[0, 0.02, 0]} receiveShadow>
          <cylinderGeometry args={[0.85, 0.85, 0.04, 40]} />
          <meshStandardMaterial color={palette.rugInner} roughness={1} />
        </mesh>
      </group>

      {/* 落地灯（可交互）：左侧角落，点击开关 */}
      <FloorLamp position={[-1.65, 0, 0.3]} />
    </group>
  )
}
