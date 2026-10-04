import { createContext, useContext } from 'react'
import type { HouseContent2026 } from '../data/houseContent2026'

/** 七个专用面板的标识（旅行相册 / 学业手账 / 游戏手机 / 实习 / 电脑桌面 / 工程工具包 / 项目）。 */
export type PanelKind =
  | 'travel'
  | 'academic'
  | 'games'
  | 'internship'
  | 'desktop'
  | 'engineering'
  | 'projects'

export interface InteractionContextValue {
  /** 当前被选中并打开信息卡的内容，null 表示没有。 */
  selected: HouseContent2026 | null
  select: (content: HouseContent2026) => void
  close: () => void
  /** 当前打开的专用面板，null 表示都没开。 */
  activePanel: PanelKind | null
  openPanel: (panel: PanelKind) => void
  closePanel: () => void
}

export const InteractionContext = createContext<InteractionContextValue>({
  selected: null,
  select: () => {},
  close: () => {},
  activePanel: null,
  openPanel: () => {},
  closePanel: () => {},
})

export function useInteraction() {
  return useContext(InteractionContext)
}
