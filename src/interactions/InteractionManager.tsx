import { useCallback, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import type { HouseContent2026 } from '../data/houseContent2026'
import type { PanelKind } from './interactionContext'
import { InteractionContext } from './interactionContext'

/**
 * 统一的「交互管理器」：维护「哪个信息卡被选中」和「哪个专用面板打开」两个状态。
 * 专用面板（旅行相册 / 学业手账）用 activePanel 统一表达，避免未来每个板块各加一个 boolean。
 */
export function InteractionProvider({ children }: { children: ReactNode }) {
  const [selected, setSelected] = useState<HouseContent2026 | null>(null)
  const [activePanel, setActivePanel] = useState<PanelKind | null>(null)

  const select = useCallback((content: HouseContent2026) => setSelected(content), [])
  const close = useCallback(() => setSelected(null), [])
  const openPanel = useCallback((panel: PanelKind) => setActivePanel(panel), [])
  const closePanel = useCallback(() => setActivePanel(null), [])

  const value = useMemo(
    () => ({ selected, select, close, activePanel, openPanel, closePanel }),
    [selected, select, close, activePanel, openPanel, closePanel],
  )

  return <InteractionContext.Provider value={value}>{children}</InteractionContext.Provider>
}
