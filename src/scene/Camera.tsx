import { OrbitControls } from '@react-three/drei'

/**
 * 玩偶屋镜头：默认从斜上方（约 34°）俯视整间小屋，
 * 像在观察一个摆在桌面上的玩偶屋。
 * 通过限制距离和角度，避免镜头翻到地板下面、缩太远或跑到屋子背面。
 */
export function CameraRig() {
  return (
    <OrbitControls
      makeDefault
      target={[0, 0.8, 0]}
      enablePan={false}
      enableDamping
      dampingFactor={0.08}
      minDistance={6}
      maxDistance={24}
      minPolarAngle={0.55}
      maxPolarAngle={1.42}
      minAzimuthAngle={-1.25}
      maxAzimuthAngle={1.25}
    />
  )
}
