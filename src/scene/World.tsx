import { Environment } from './Environment'
import { Lighting } from './Lighting'
import { CameraRig } from './Camera'
import { House } from '../rooms/House'

/**
 * 整个 3D 世界的根组件：把环境、灯光、小屋和镜头组合在一起。
 * SceneCanvas 只负责挂载 Canvas，真正的场景内容都在这里。
 */
export function World() {
  return (
    <>
      <Environment />
      <Lighting />
      <House />
      <CameraRig />
    </>
  )
}
