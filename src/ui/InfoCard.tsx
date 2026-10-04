import { useInteraction } from '../interactions/interactionContext'

/**
 * 统一的信息卡：所有可交互对象点击后都弹出这一张卡片。
 * 内容来自 InteractionManager 里当前选中的 HouseContent2026，自身不关心来源。
 * 未来要加图片 / 标签，在 HouseContent2026 上扩展字段、在这里渲染即可。
 */
export function InfoCard() {
  const { selected, close } = useInteraction()

  if (!selected) return null

  return (
    <div className="infocard__backdrop" onClick={close}>
      <div className="infocard" onClick={(event) => event.stopPropagation()}>
        <button className="infocard__close" type="button" onClick={close} aria-label="Close">
          ×
        </button>
        <span className="infocard__category">{selected.category}</span>
        <h2 className="infocard__title">{selected.title}</h2>
        <p className="infocard__body">{selected.description}</p>
      </div>
    </div>
  )
}
