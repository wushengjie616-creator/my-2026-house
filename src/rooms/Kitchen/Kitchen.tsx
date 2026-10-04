import { palette } from '../../utils/palette'

interface KitchenProps {
  position?: [number, number, number]
}

export function Kitchen({ position = [0, 0, 0] }: KitchenProps) {
  return (
    <group position={position}>
      {/* 冰箱：靠后墙左侧 */}
      <group position={[-1.4, 0, -3.3]}>
        <mesh position={[0, 1, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.9, 2, 0.7]} />
          <meshStandardMaterial color="#e8e4dc" roughness={0.5} />
        </mesh>
        <mesh position={[0, 1, 0.36]}>
          <boxGeometry args={[0.06, 1.9, 0.02]} />
          <meshStandardMaterial color="#c9c4ba" roughness={0.5} />
        </mesh>
        <mesh position={[-0.3, 1.1, 0.38]}>
          <boxGeometry args={[0.06, 0.25, 0.06]} />
          <meshStandardMaterial color={palette.metal} roughness={0.4} />
        </mesh>
        <mesh position={[-0.3, 0.55, 0.38]}>
          <boxGeometry args={[0.06, 0.25, 0.06]} />
          <meshStandardMaterial color={palette.metal} roughness={0.4} />
        </mesh>
      </group>

      {/* 料理台：靠后墙中间 */}
      <group position={[0.3, 0, -3.35]}>
        <mesh position={[0, 0.45, 0]} castShadow receiveShadow>
          <boxGeometry args={[1.5, 0.9, 0.65]} />
          <meshStandardMaterial color={palette.woodLight} roughness={0.7} />
        </mesh>
        <mesh position={[0, 0.92, 0]} castShadow>
          <boxGeometry args={[1.6, 0.05, 0.7]} />
          <meshStandardMaterial color="#e6d9c8" roughness={0.6} />
        </mesh>
        <mesh position={[0.3, 0.94, 0]}>
          <boxGeometry args={[0.5, 0.02, 0.4]} />
          <meshStandardMaterial color="#8a8f96" metalness={0.6} roughness={0.4} />
        </mesh>
      </group>

      {/* 灶台：靠后墙右侧 */}
      <group position={[1.55, 0, -3.35]}>
        <mesh position={[0, 0.45, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.85, 0.9, 0.65]} />
          <meshStandardMaterial color="#cfd2d0" roughness={0.5} />
        </mesh>
        <mesh position={[0, 0.92, 0]} castShadow>
          <boxGeometry args={[0.8, 0.05, 0.6]} />
          <meshStandardMaterial color="#4b4b51" roughness={0.5} />
        </mesh>
        <mesh position={[-0.18, 0.95, 0]}>
          <cylinderGeometry args={[0.11, 0.11, 0.02, 20]} />
          <meshStandardMaterial color="#333338" roughness={0.4} />
        </mesh>
        <mesh position={[0.18, 0.95, 0]}>
          <cylinderGeometry args={[0.11, 0.11, 0.02, 20]} />
          <meshStandardMaterial color="#333338" roughness={0.4} />
        </mesh>
      </group>

      {/* 餐桌 + 凳子 */}
      <group position={[0, 0, 1.8]}>
        <mesh position={[0, 0.72, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.55, 0.55, 0.06, 28]} />
          <meshStandardMaterial color={palette.woodLight} roughness={0.6} />
        </mesh>
        <mesh position={[0, 0.36, 0]} castShadow>
          <cylinderGeometry args={[0.06, 0.09, 0.72, 14]} />
          <meshStandardMaterial color={palette.woodDark} roughness={0.7} />
        </mesh>
        <mesh position={[-0.8, 0.4, 0]} castShadow>
          <cylinderGeometry args={[0.24, 0.24, 0.08, 20]} />
          <meshStandardMaterial color={palette.wood} roughness={0.7} />
        </mesh>
        <mesh position={[0.8, 0.4, 0]} castShadow>
          <cylinderGeometry args={[0.24, 0.24, 0.08, 20]} />
          <meshStandardMaterial color={palette.wood} roughness={0.7} />
        </mesh>
      </group>
    </group>
  )
}
