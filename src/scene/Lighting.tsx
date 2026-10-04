import { palette } from '../utils/palette'

/**
 * 全局灯光，营造「傍晚回到家打开灯」的暖黄色氛围。
 * 一束头顶的暖光均匀地照亮整间玩偶屋；卧室台灯自己的局部暖光放在 Bedroom 里。
 */
export function Lighting() {
  return (
    <>
      {/* 温柔的底色，让暗部不至于死黑 */}
      <ambientLight color="#fff2e0" intensity={0.6} />

      {/* 天空（傍晚蓝）到地面（木色）的过渡补光 */}
      <hemisphereLight color="#b9c4e4" groundColor={palette.floor} intensity={0.55} />

      {/* 头顶的暖色补光：像小屋上方的一盏暖灯 */}
      <pointLight position={[0, 6, 0]} color="#ffd9a6" intensity={40} distance={22} decay={2} />

      {/* 主方向光：模拟傍晚斜射进来的暖光，负责阴影 */}
      <directionalLight
        position={[8, 14, 9]}
        intensity={1.5}
        color="#ffe2bd"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-left={-12}
        shadow-camera-right={12}
        shadow-camera-top={12}
        shadow-camera-bottom={-12}
        shadow-camera-near={1}
        shadow-camera-far={40}
        shadow-bias={-0.0003}
        shadow-normalBias={0.02}
      />
    </>
  )
}
