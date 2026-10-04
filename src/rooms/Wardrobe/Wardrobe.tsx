import { palette } from '../../utils/palette'
import { InteractiveObject } from '../../interactions/InteractiveObject'

interface WardrobeProps {
  position?: [number, number, number]
}

export function Wardrobe({ position = [0, 0, 0] }: WardrobeProps) {
  return (
    <group position={position}>
      {/* 衣柜（可交互）：靠后墙 */}
      <InteractiveObject id="wardrobe" label="Wardrobe" position={[0, 0, -1.6]}>
        <mesh position={[0, 1.25, 0]} castShadow receiveShadow>
          <boxGeometry args={[1.6, 2.5, 0.6]} />
          <meshStandardMaterial color={palette.woodLight} roughness={0.7} />
        </mesh>
        <mesh position={[-0.4, 1.25, 0.31]} castShadow>
          <boxGeometry args={[0.75, 2.35, 0.06]} />
          <meshStandardMaterial color={palette.wood} roughness={0.65} />
        </mesh>
        <mesh position={[0.4, 1.25, 0.31]} castShadow>
          <boxGeometry args={[0.75, 2.35, 0.06]} />
          <meshStandardMaterial color={palette.wood} roughness={0.65} />
        </mesh>
        <mesh position={[-0.58, 1.3, 0.36]}>
          <boxGeometry args={[0.05, 0.2, 0.05]} />
          <meshStandardMaterial color={palette.metal} roughness={0.4} />
        </mesh>
        <mesh position={[0.58, 1.3, 0.36]}>
          <boxGeometry args={[0.05, 0.2, 0.05]} />
          <meshStandardMaterial color={palette.metal} roughness={0.4} />
        </mesh>
        <mesh position={[0, 2.55, 0]} castShadow>
          <boxGeometry args={[1.7, 0.08, 0.66]} />
          <meshStandardMaterial color={palette.woodDark} roughness={0.6} />
        </mesh>
      </InteractiveObject>

      {/* 落地镜：靠左墙 */}
      <group position={[-1.82, 0, 0.6]}>
        <mesh position={[0, 0.8, 0]}>
          <boxGeometry args={[0.08, 1.6, 0.6]} />
          <meshStandardMaterial color={palette.woodLight} roughness={0.7} />
        </mesh>
        <mesh position={[0.05, 0.8, 0]}>
          <boxGeometry args={[0.02, 1.5, 0.5]} />
          <meshStandardMaterial
            color="#dbe9ee"
            emissive="#b6ccd6"
            emissiveIntensity={0.3}
            roughness={0.15}
            metalness={0.3}
          />
        </mesh>
      </group>

      {/* 挂衣架 */}
      <group position={[1.5, 0, 0.5]}>
        <mesh position={[-0.4, 0.75, 0]} castShadow>
          <cylinderGeometry args={[0.03, 0.03, 1.5, 10]} />
          <meshStandardMaterial color={palette.metal} roughness={0.5} />
        </mesh>
        <mesh position={[0.4, 0.75, 0]} castShadow>
          <cylinderGeometry args={[0.03, 0.03, 1.5, 10]} />
          <meshStandardMaterial color={palette.metal} roughness={0.5} />
        </mesh>
        <mesh position={[0, 1.5, 0]} castShadow>
          <boxGeometry args={[0.9, 0.05, 0.05]} />
          <meshStandardMaterial color={palette.metal} roughness={0.5} />
        </mesh>
        <mesh position={[-0.2, 1.25, 0]} castShadow>
          <boxGeometry args={[0.3, 0.5, 0.06]} />
          <meshStandardMaterial color={palette.blanket} roughness={0.9} />
        </mesh>
        <mesh position={[0.05, 1.22, 0]} castShadow>
          <boxGeometry args={[0.28, 0.44, 0.06]} />
          <meshStandardMaterial color={palette.plant} roughness={0.9} />
        </mesh>
        <mesh position={[0.28, 1.26, 0]} castShadow>
          <boxGeometry args={[0.26, 0.4, 0.06]} />
          <meshStandardMaterial color={palette.rugInner} roughness={0.9} />
        </mesh>
      </group>
    </group>
  )
}
