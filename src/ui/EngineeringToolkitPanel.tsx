import { useState } from 'react'
import { useInteraction } from '../interactions/interactionContext'
import { engineering2026 } from '../data/engineering2026'
import type { EngineeringCapability2026, Engineering2026 } from '../data/engineering2026'

/**
 * Engineering Toolkit 面板：点击书房电脑打开。
 * 视觉上是「属于我的电脑工作空间」，但不复制 macOS / Windows / VS Code 等产品 UI。
 * 顶部是六个标签（Overview + 五个能力），点击切换；底部是年度总结。
 * 所有内容来自 engineering2026.ts，组件自身不写死能力文案。
 */
export function EngineeringToolkitPanel() {
  const { activePanel, closePanel, openPanel } = useInteraction()
  const [activeId, setActiveId] = useState('overview')

  if (activePanel !== 'engineering') return null

  const data = engineering2026
  const activeCap = data.capabilities.find((cap) => cap.id === activeId)

  return (
    <div className="eng__backdrop" onClick={closePanel}>
      <div className="eng" onClick={(event) => event.stopPropagation()}>
        <button className="eng__back" type="button" onClick={() => openPanel('desktop')}>
          ← Back to Desktop
        </button>
        <button className="eng__close" type="button" onClick={closePanel} aria-label="Close">
          ×
        </button>

        <h2 className="eng__heading">2026 Engineering Toolkit</h2>
        <p className="eng__sub">Things I learned to build with.</p>

        <div className="eng__nav">
          <button
            type="button"
            className={`eng__tab${activeId === 'overview' ? ' eng__tab--active' : ''}`}
            onClick={() => setActiveId('overview')}
          >
            Overview
          </button>
          {data.capabilities.map((cap) => (
            <button
              key={cap.id}
              type="button"
              className={`eng__tab${activeId === cap.id ? ' eng__tab--active' : ''}`}
              onClick={() => setActiveId(cap.id)}
            >
              {cap.nav}
            </button>
          ))}
        </div>

        {activeCap ? (
          <CapabilityDetail
            cap={activeCap}
            workflow={data.workflow}
            parallelWork={data.parallelWork}
          />
        ) : (
          <Overview data={data} onSelect={setActiveId} />
        )}

        <div className="eng__reflection">
          <p className="eng__reflection-text">{data.reflection}</p>
        </div>
      </div>
    </div>
  )
}

function Overview({ data, onSelect }: { data: Engineering2026; onSelect: (id: string) => void }) {
  const { intro, capabilities } = data
  return (
    <div className="eng__overview">
      <div className="eng__overview-head">
        <h3 className="eng__overview-title">{intro.title}</h3>
        <p className="eng__overview-sub">{intro.subtitle}</p>
        <span className="eng__overview-mode">{intro.mode}</span>
        <p className="eng__overview-desc">{intro.description}</p>
      </div>

      <div className="eng__overview-grid">
        {capabilities.map((cap) => (
          <button
            key={cap.id}
            type="button"
            className="eng__cap-card"
            onClick={() => onSelect(cap.id)}
          >
            <span className="eng__cap-card-nav">{cap.nav}</span>
            <span className="eng__cap-card-title">{cap.title}</span>
            <span className="eng__cap-card-summary">{cap.summary}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

function CapabilityDetail({
  cap,
  workflow,
  parallelWork,
}: {
  cap: EngineeringCapability2026
  workflow: string[]
  parallelWork: Engineering2026['parallelWork']
}) {
  const isCollab = cap.id === 'collaboration'
  return (
    <div className="eng__detail">
      <h3 className="eng__detail-title">{cap.title}</h3>
      {cap.subtitle && <p className="eng__detail-sub">{cap.subtitle}</p>}
      <p className="eng__detail-summary">{cap.summary}</p>

      {cap.implementation && (
        <span className="eng__detail-tag">Implementation: {cap.implementation}</span>
      )}

      <div className="eng__levels">
        {cap.levelLabels.map((label) => (
          <span key={label} className="eng__level">
            {label}
          </span>
        ))}
      </div>

      <ul className="eng__points">
        {cap.details.map((detail) => (
          <li key={detail}>{detail}</li>
        ))}
      </ul>

      {cap.flow && <Flow steps={cap.flow} />}

      <div className="eng__keywords">
        {cap.keywords.map((keyword) => (
          <span key={keyword} className="eng__keyword">
            {keyword}
          </span>
        ))}
      </div>

      {isCollab && (
        <>
          <section className="eng__howbuild">
            <h4 className="eng__section-title">How I Build</h4>
            <Flow steps={workflow} />
          </section>

          <section className="eng__parallel">
            <h4 className="eng__section-title">{parallelWork.title}</h4>
            <p className="eng__parallel-desc">{parallelWork.description}</p>
            <div className="eng__parallel-tree">
              <div className="eng__branch-main">main</div>
              {parallelWork.branches.map((branch, index) => (
                <div key={branch.name} className="eng__branch-row">
                  <span className="eng__branch-line">
                    {index < parallelWork.branches.length - 1 ? '├──' : '└──'}
                  </span>
                  <span className="eng__branch-name">{branch.name}</span>
                  <span className="eng__branch-agent">→ {branch.agent}</span>
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  )
}

function Flow({ steps }: { steps: string[] }) {
  return (
    <div className="eng__flow">
      {steps.map((step, index) => (
        <div key={step} className="eng__flow-step">
          <span className="eng__flow-node">{step}</span>
          {index < steps.length - 1 && (
            <span className="eng__flow-arrow" aria-hidden="true">
              →
            </span>
          )}
        </div>
      ))}
    </div>
  )
}
