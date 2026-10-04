import { palette } from '../utils/palette'

/**
 * 房间之外的环境：目前只有一整个傍晚深蓝紫色的背景色。
 * 以后想加星空、远景、雾效等，都放在这里。
 */
export function Environment() {
  return <color attach="background" args={[palette.skyDuskDeep]} />
}
