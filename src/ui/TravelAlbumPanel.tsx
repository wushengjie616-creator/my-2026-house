import { useState } from 'react'
import { useInteraction } from '../interactions/interactionContext'
import { travel2026 } from '../data/travel2026'

/**
 * 旅行手账面板：点击客厅茶几上的相册打开。
 * 顶部是 FEB / APR / MAY / SEP 四个月份标签，下方用「明信片」风格展示当前这段旅行。
 * 内容全部来自 travel2026.ts，组件自身不写死任何文字。
 */
export function TravelAlbumPanel() {
  const { activePanel, closePanel } = useInteraction()
  const [activeId, setActiveId] = useState(travel2026[0].id)

  if (activePanel !== 'travel') return null

  const active = travel2026.find((entry) => entry.id === activeId) ?? travel2026[0]

  return (
    <div className="travel__backdrop" onClick={closePanel}>
      <div className="travel" onClick={(event) => event.stopPropagation()}>
        <button className="travel__close" type="button" onClick={closePanel} aria-label="Close">
          ×
        </button>

        <h2 className="travel__heading">My 2026 Travels</h2>
        <p className="travel__sub">四段旅程 · 2026</p>

        <div className="travel__tabs">
          {travel2026.map((entry) => (
            <button
              key={entry.id}
              type="button"
              className={`travel__tab${entry.id === active.id ? ' travel__tab--active' : ''}`}
              onClick={() => setActiveId(entry.id)}
            >
              {entry.monthLabel}
            </button>
          ))}
        </div>

        <div className="travel__page">
          <div className="travel__meta">
            <span className="travel__month">{active.monthName} 2026</span>
            <span className="travel__location">{active.locations.join(' · ')}</span>
          </div>

          <h3 className="travel__title">{active.title}</h3>

          {active.photo && (
            <img
              className="travel__photo"
              src={active.photo}
              alt={`${active.locations.join(' · ')} 的照片`}
            />
          )}

          <p className="travel__summary">{active.summary}</p>

          <div className="travel__highlights">
            {active.highlights.map((highlight) => (
              <span key={highlight} className="travel__highlight">
                {highlight}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
