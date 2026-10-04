import { useState } from 'react'
import { useInteraction } from '../interactions/interactionContext'
import { games2026 } from '../data/games2026'
import type { Game2026 } from '../data/games2026'

/**
 * 游戏手机面板：点击卧室床头柜上的手机打开。
 * 这是「2026 游戏记忆册」，不是排行榜 / 平台统计中心。
 * 首页列出四种快乐（Challenge / Casual / Stories / Together），点击进入单游戏详情。
 * 内容全部来自 games2026.ts，组件自身不写死游戏文案。
 */
export function GamesPhonePanel() {
  const { activePanel, closePanel } = useInteraction()
  const [activeId, setActiveId] = useState<string | null>(null)

  if (activePanel !== 'games') return null

  const activeIndex = activeId === null ? -1 : games2026.findIndex((game) => game.id === activeId)
  const active = activeIndex >= 0 ? games2026[activeIndex] : null

  return (
    <div className="games__backdrop" onClick={closePanel}>
      <div className="games-phone" onClick={(event) => event.stopPropagation()}>
        <button className="games__close" type="button" onClick={closePanel} aria-label="Close">
          ×
        </button>

        <div className="games__statusbar">
          <span>2026</span>
          <span>GAMES</span>
        </div>

        {active ? (
          <GameDetail game={active} index={activeIndex} onBack={() => setActiveId(null)} />
        ) : (
          <GamesHome onSelect={setActiveId} />
        )}
      </div>
    </div>
  )
}

function GamesHome({ onSelect }: { onSelect: (id: string) => void }) {
  return (
    <>
      <h2 className="games__title">My 2026 Games</h2>
      <p className="games__subtitle">Some worlds I spent time in this year.</p>

      <div className="games__list">
        {games2026.map((game, index) => (
          <button
            key={game.id}
            type="button"
            className={`games__entry games__entry--${index}`}
            onClick={() => onSelect(game.id)}
          >
            <span className="games__entry-head">
              <span className="games__entry-num">0{index + 1}</span>
              <span className="games__entry-sep" aria-hidden="true">
                ·
              </span>
              <span className="games__entry-cat">{game.category}</span>
            </span>
            <span className="games__entry-name">{game.name}</span>
            <span className="games__entry-summary">{game.summary}</span>
          </button>
        ))}
      </div>
    </>
  )
}

function GameDetail({
  game,
  index,
  onBack,
}: {
  game: Game2026
  index: number
  onBack: () => void
}) {
  return (
    <div className="games__detail">
      <button className="games__back" type="button" onClick={onBack}>
        ← Back to Games
      </button>

      <span className={`games__detail-cat games__detail-cat--${index}`}>{game.category}</span>
      <h2 className="games__detail-name">{game.name}</h2>
      <h3 className="games__detail-title">{game.title}</h3>

      <div className="games__body">
        {game.body.map((para, i) => (
          <p key={i} className="games__para">
            {para}
          </p>
        ))}
      </div>

      {game.tags.length > 0 && (
        <div className="games__tags">
          {game.tags.map((tag) => (
            <span key={tag} className="games__tag">
              {tag}
            </span>
          ))}
        </div>
      )}

      {game.highlights && game.highlights.length > 0 && (
        <div className="games__highlights">
          {game.highlights.map((highlight) => (
            <span key={highlight} className="games__highlight">
              {highlight}
            </span>
          ))}
        </div>
      )}

      {game.quote && <p className="games__quote">{game.quote}</p>}

      {game.stats && game.stats.length > 0 && (
        <StatBlock heading="2026 Memory" items={game.stats} />
      )}

      {game.funFacts && game.funFacts.length > 0 && (
        <StatBlock heading="Just for fun" items={game.funFacts} fun />
      )}
    </div>
  )
}

function StatBlock({
  heading,
  items,
  fun = false,
}: {
  heading: string
  items: { label: string; value: string }[]
  fun?: boolean
}) {
  return (
    <div className={`games__stats${fun ? ' games__stats--fun' : ''}`}>
      <h4 className="games__stats-head">{heading}</h4>
      <div className="games__stats-grid">
        {items.map((item) => (
          <div key={item.label} className="games__stat">
            <span className="games__stat-label">{item.label}</span>
            <span className="games__stat-value">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
