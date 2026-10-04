import { palette } from '../../utils/palette'
import { InteractiveObject } from '../../interactions/InteractiveObject'
import { useInteraction } from '../../interactions/interactionContext'

interface BedroomProps {
  position?: [number, number, number]
}

export function Bedroom({ position = [0, 0, 0] }: BedroomProps) {
  const { openPanel } = useInteraction()

  return (
    <group position={position}>
      {/* 床 */}
      <group position={[-0.4, 0, -0.4]}>
        <mesh position={[0, 0.2, 0]} castShadow receiveShadow>
          <boxGeometry args={[2.2, 0.3, 3]} />
          <meshStandardMaterial color={palette.wood} roughness={0.7} />
        </mesh>
        <mesh position={[0, 0.42, -0.05]} castShadow receiveShadow>
          <boxGeometry args={[2.0, 0.22, 2.7]} />
          <meshStandardMaterial color={palette.cream} roughness={0.9} />
        </mesh>
        <mesh position={[0, 0.44, 0.55]} castShadow>
          <boxGeometry args={[2.04, 0.16, 1.5]} />
          <meshStandardMaterial color={palette.blanket} roughness={0.95} />
        </mesh>
        <mesh position={[-0.6, 0.55, -1.05]} castShadow>
          <boxGeometry args={[0.72, 0.14, 0.5]} />
          <meshStandardMaterial color={palette.cream} roughness={0.95} />
        </mesh>
        <mesh position={[0.6, 0.55, -1.05]} castShadow>
          <boxGeometry args={[0.72, 0.14, 0.5]} />
          <meshStandardMaterial color={palette.cream} roughness={0.95} />
        </mesh>
      </group>

      {/* 床头柜 + 台灯 */}
      <group position={[1.35, 0, -1.5]}>
        <mesh position={[0, 0.25, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.5, 0.5, 0.4]} />
          <meshStandardMaterial color={palette.woodLight} roughness={0.7} />
        </mesh>
        <pointLight position={[0, 0.95, 0]} color={palette.lampGlow} intensity={8} distance={6} decay={2} />
        <mesh position={[0, 0.62, 0]}>
          <cylinderGeometry args={[0.03, 0.03, 0.18, 12]} />
          <meshStandardMaterial color={palette.metal} roughness={0.5} />
        </mesh>
        <mesh position={[0, 0.82, 0]}>
          <cylinderGeometry args={[0.12, 0.2, 0.24, 20]} />
          <meshStandardMaterial
            color={palette.lampShade}
            emissive={palette.lampGlow}
            emissiveIntensity={0.6}
            roughness={0.9}
          />
        </mesh>
      </group>

      {/* 手机（可交互）：放在床头柜上，记录 2026 玩过的游戏 */}
      <InteractiveObject
        id="phone"
        label="2026 Games"
        position={[1.2, 0.515, -1.45]}
        onInteract={() => openPanel('games')}
      >
        <mesh position={[0, 0, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.15, 0.02, 0.3]} />
          <meshStandardMaterial color="#2f2f35" roughness={0.45} />
        </mesh>
        <mesh position={[0, 0.011, 0]}>
          <boxGeometry args={[0.13, 0.004, 0.26]} />
          <meshStandardMaterial
            color="#d8e6ea"
            emissive="#b8c8cc"
            emissiveIntensity={0.35}
            roughness={0.3}
          />
        </mesh>
      </InteractiveObject>

      {/* 地毯 */}
      <group position={[0, 0.03, 0.6]}>
        <mesh receiveShadow>
          <cylinderGeometry args={[1.5, 1.5, 0.04, 40]} />
          <meshStandardMaterial color={palette.rug} roughness={1} />
        </mesh>
        <mesh position={[0, 0.02, 0]} receiveShadow>
          <cylinderGeometry args={[0.95, 0.95, 0.04, 40]} />
          <meshStandardMaterial color={palette.rugInner} roughness={1} />
        </mesh>
      </group>
    </group>
  )
}
