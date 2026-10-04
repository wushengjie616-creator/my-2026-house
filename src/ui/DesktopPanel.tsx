import { useState } from 'react'
import { useInteraction } from '../interactions/interactionContext'

/**
 * My 2026 Desktop 面板：点击书房电脑打开。
 * 作为 2026 技术成长的电脑入口，提供三个入口：Projects / Engineering Toolkit / 2026.log。
 * 不是 macOS / Windows / VS Code 的模仿，而是温馨、简洁的个人电脑桌面。
 */
export function DesktopPanel() {
  const { activePanel, closePanel, openPanel } = useInteraction()
  const [showLog, setShowLog] = useState(false)

  if (activePanel !== 'desktop') return null

  return (
    <div className="desktop__backdrop" onClick={closePanel}>
      <div className="desktop" onClick={(event) => event.stopPropagation()}>
        <button className="desktop__close" type="button" onClick={closePanel} aria-label="Close">
          ×
        </button>

        <h2 className="desktop__heading">My 2026 Desktop</h2>
        <p className="desktop__sub">Things I built and learned this year.</p>

        {showLog ? (
          <LogView onBack={() => setShowLog(false)} />
        ) : (
          <div className="desktop__entries">
            <DesktopEntry
              title="Projects"
              question="What did I build?"
              subtitle="Things I built."
              onClick={() => openPanel('projects')}
            />
            <DesktopEntry
              title="Engineering Toolkit"
              question="What did I learn to build with?"
              subtitle="Things I learned to build with."
              onClick={() => openPanel('engineering')}
            />
            <DesktopEntry
              title="2026.log"
              subtitle="Notes from a year of learning by building."
              onClick={() => setShowLog(true)}
              minor
            />
          </div>
        )}
      </div>
    </div>
  )
}

function DesktopEntry({
  title,
  question,
  subtitle,
  onClick,
  minor = false,
}: {
  title: string
  question?: string
  subtitle: string
  onClick: () => void
  minor?: boolean
}) {
  return (
    <button
      type="button"
      className={`desktop__entry${minor ? ' desktop__entry--minor' : ''}`}
      onClick={onClick}
    >
      <span className="desktop__entry-title">{title}</span>
      {question && <span className="desktop__entry-question">{question}</span>}
      <span className="desktop__entry-sub">{subtitle}</span>
    </button>
  )
}

function LogView({ onBack }: { onBack: () => void }) {
  return (
    <div className="desktop__log">
      <button className="desktop__back" type="button" onClick={onBack}>
        ← Back to Desktop
      </button>
      <h3 className="desktop__log-title">2026.log</h3>
      <p className="desktop__log-line">Learning how to build, one project at a time.</p>
      <p className="desktop__log-line">四个项目让我从个人产品、后端系统、数据分析一路走到 Agent 设计。</p>
    </div>
  )
}
