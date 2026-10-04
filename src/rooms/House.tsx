import { palette } from '../utils/palette'
import { Bedroom } from './Bedroom/Bedroom'
import { LivingRoom } from './LivingRoom/LivingRoom'
import { Study } from './Study/Study'
import { Wardrobe } from './Wardrobe/Wardrobe'
import { Kitchen } from './Kitchen/Kitchen'

const WALL_HEIGHT = 3.8
const DIVIDER_HEIGHT = 1.5

/**
 * 后墙上的窗户：自发光平面表现「窗外蓝紫色傍晚 + 落日余晖」。
 * 窗户是建筑的一部分，所以放在 House 外壳里，而不是某个房间里。
 */
function BackWindow({ x }: { x: number }) {
  return (
    <group position={[x, 0, -3.92]}>
      <mesh position={[0, 2, 0]}>
        <boxGeometry args={[1.8, 2, 0.14]} />
        <meshStandardMaterial color={palette.wallTrim} roughness={0.8} />
      </mesh>
      <mesh position={[0, 2, 0.08]}>
        <planeGeometry args={[1.5, 1.7]} />
        <meshStandardMaterial
          color={palette.skyDusk}
          emissive={palette.skyDusk}
          emissiveIntensity={0.5}
          roughness={1}
        />
      </mesh>
      <mesh position={[0, 1.45, 0.09]}>
        <circleGeometry args={[0.42, 32]} />
        <meshStandardMaterial
          color={palette.sunsetGlow}
          emissive={palette.sunsetGlow}
          emissiveIntensity={0.9}
          roughness={1}
        />
      </mesh>
      <mesh position={[0, 2, 0.12]}>
        <boxGeometry args={[0.06, 1.7, 0.04]} />
        <meshStandardMaterial color={palette.wallTrim} roughness={0.8} />
      </mesh>
      <mesh position={[0, 2, 0.12]}>
        <boxGeometry args={[1.5, 0.06, 0.04]} />
        <meshStandardMaterial color={palette.wallTrim} roughness={0.8} />
      </mesh>
    </group>
  )
}

/**
 * 小屋外壳：底座、地板、后墙、左右墙、内部矮分隔墙，以及五个房间。
 * 玩偶屋风格 —— 面向镜头的一侧（z 正方向）完全敞开，内部用矮墙分区，
 * 这样从斜上方就能一眼看到所有房间。
 */
export function House() {
  return (
    <group>
      {/* 底座（让小屋像摆在桌上的玩偶屋） */}
      <mesh position={[0, -0.55, 0]} receiveShadow>
        <boxGeometry args={[13.2, 0.5, 9.2]} />
        <meshStandardMaterial color={palette.woodDark} roughness={0.85} />
      </mesh>
      {/* 地板 */}
      <mesh position={[0, -0.2, 0]} receiveShadow>
        <boxGeometry args={[12, 0.4, 8]} />
        <meshStandardMaterial color={palette.floor} roughness={0.85} />
      </mesh>

      {/* 后墙 */}
      <mesh position={[0, WALL_HEIGHT / 2, -4.15]} receiveShadow>
        <boxGeometry args={[12.4, WALL_HEIGHT, 0.3]} />
        <meshStandardMaterial color={palette.wall} roughness={0.95} />
      </mesh>
      {/* 左墙 */}
      <mesh position={[-6.15, WALL_HEIGHT / 2, 0]} receiveShadow>
        <boxGeometry args={[0.3, WALL_HEIGHT, 8.4]} />
        <meshStandardMaterial color={palette.wall} roughness={0.95} />
      </mesh>
      {/* 右墙 */}
      <mesh position={[6.15, WALL_HEIGHT / 2, 0]} receiveShadow>
        <boxGeometry args={[0.3, WALL_HEIGHT, 8.4]} />
        <meshStandardMaterial color={palette.wall} roughness={0.95} />
      </mesh>

      {/* 内部矮分隔墙：低矮不遮挡视线 */}
      <mesh position={[-2, DIVIDER_HEIGHT / 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.15, DIVIDER_HEIGHT, 8]} />
        <meshStandardMaterial color={palette.wall} roughness={0.95} />
      </mesh>
      <mesh position={[2, DIVIDER_HEIGHT / 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.15, DIVIDER_HEIGHT, 8]} />
        <meshStandardMaterial color={palette.wall} roughness={0.95} />
      </mesh>
      <mesh position={[-4, DIVIDER_HEIGHT / 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[4, DIVIDER_HEIGHT, 0.15]} />
        <meshStandardMaterial color={palette.wall} roughness={0.95} />
      </mesh>
      <mesh position={[0, DIVIDER_HEIGHT / 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[4, DIVIDER_HEIGHT, 0.15]} />
        <meshStandardMaterial color={palette.wall} roughness={0.95} />
      </mesh>

      {/* 后墙窗户 */}
      <BackWindow x={-4} />
      <BackWindow x={4} />

      {/* 五个房间 */}
      <Bedroom position={[-4, 0, -2]} />
      <Study position={[0, 0, -2]} />
      <Kitchen position={[4, 0, 0]} />
      <Wardrobe position={[-4, 0, 2]} />
      <LivingRoom position={[0, 0, 2]} />
    </group>
  )
}
