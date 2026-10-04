import { useState } from 'react'
import { palette } from '../../utils/palette'
import { InteractiveObject } from '../../interactions/InteractiveObject'

interface FloorLampProps {
  position?: [number, number, number]
}

/**
 * 可交互的落地灯：默认亮着，点击切换开关。
 * 灯罩用 meshBasicMaterial（不受场景光照影响、也不会被 InteractiveObject 的 hover 发光覆盖），
 * 靠颜色区分开关状态；真正的场景光照由一盏暖黄点光源承担，关掉后角落变暗但整屋不会全黑。
 */
export function FloorLamp({ position = [0, 0, 0] }: FloorLampProps) {
  const [lightOn, setLightOn] = useState(true)

  return (
    <group position={position}>
      {/* 暖黄点光源：随开关切换强度 */}
      <pointLight
        position={[0, 1.62, 0]}
        color={palette.lampGlow}
        intensity={lightOn ? 16 : 0}
        distance={8}
        decay={2}
      />

      {/* 灯具本体（底座 / 灯杆 / 灯罩），用 InteractiveObject 提供 hover + 点击开关 */}
      <InteractiveObject
        id="floor-lamp"
        label="Light"
        onInteract={() => setLightOn((value) => !value)}
      >
        {/* 底座 */}
        <mesh position={[0, 0.03, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.16, 0.2, 0.05, 20]} />
          <meshStandardMaterial color={palette.woodDark} roughness={0.7} />
        </mesh>
        {/* 灯杆 */}
        <mesh position={[0, 0.85, 0]}>
          <cylinderGeometry args={[0.025, 0.025, 1.6, 12]} />
          <meshStandardMaterial color={palette.metal} roughness={0.5} />
        </mesh>
        {/* 灯罩：亮 = 暖黄、灭 = 灰米色 */}
        <mesh position={[0, 1.68, 0]} castShadow>
          <cylinderGeometry args={[0.16, 0.28, 0.4, 24]} />
          <meshBasicMaterial color={lightOn ? palette.lampGlow : '#c9b69a'} />
        </mesh>
      </InteractiveObject>
    </group>
  )
}
