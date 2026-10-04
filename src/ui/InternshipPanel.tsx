import { useState } from 'react'
import { useInteraction } from '../interactions/interactionContext'
import {
  internships2026,
  internshipReflection2026,
  internshipGrowthTrail2026,
} from '../data/internships2026'
import type { Internship2026 } from '../data/internships2026'

/**
 * 实习面板：点击书房书桌上的 Work Badge 打开。
 * 用「工作日志 / 工牌档案」的感觉，展示 2026 年三段实习的成长路线。
 * 顶部是时间线节点（点击切换阶段），中间是当前阶段的工作卡片，底部是成长轨迹 + 年度总结。
 * 所有文字来自 internships2026.ts，组件自身不写死内容。
 */
export function InternshipPanel() {
  const { activePanel, closePanel } = useInteraction()
  const [activeIndex, setActiveIndex] = useState(0)

  if (activePanel !== 'internship') return null

  const active = internships2026[activeIndex]

  return (
    <div className="internship__backdrop" onClick={closePanel}>
      <div className="internship" onClick={(event) => event.stopPropagation()}>
        <button className="internship__close" type="button" onClick={closePanel} aria-label="Close">
          ×
        </button>

        <h2 className="internship__heading">My 2026 Internship</h2>
        <p className="internship__sub">Learning how real work gets done.</p>

        <div className="internship__timeline">
          {internships2026.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={`internship__node internship__node--${index}${
                index === activeIndex ? ' internship__node--active' : ''
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <span className="internship__node-num">0{index + 1}</span>
              <span className="internship__node-period">{item.periodShort}</span>
            </button>
          ))}
        </div>

        <WorkCard item={active} index={activeIndex} />

        <div className="internship__trail">
          {internshipGrowthTrail2026.map((node, index) => (
            <div key={node.en} className="internship__trail-step">
              <div className="internship__trail-node">
                <span className="internship__trail-en">{node.en}</span>
                <span className="internship__trail-zh">{node.zh}</span>
              </div>
              {index < internshipGrowthTrail2026.length - 1 && (
                <span className="internship__trail-arrow" aria-hidden="true">
                  →
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="internship__reflection">
          <h3 className="internship__reflection-title">{internshipReflection2026.title}</h3>
          <p className="internship__reflection-text">{internshipReflection2026.description}</p>
        </div>
      </div>
    </div>
  )
}

function WorkCard({ item, index }: { item: Internship2026; index: number }) {
  return (
    <div className={`internship__card internship__card--${index}`}>
      <div className="internship__card-head">
        <div>
          <div className="internship__role">{item.role}</div>
          {item.roleEn && <div className="internship__role-en">{item.roleEn}</div>}
        </div>
        <span className="internship__rate">¥{item.dailyRate} / day</span>
      </div>

      <div className="internship__meta">
        <span className="internship__period">{item.period}</span>
        <span className="internship__company">{item.companyType}</span>
      </div>

      <div className="internship__stage-title">{item.stageTitle}</div>

      {item.image && <img className="internship__photo" src={item.image} alt={item.role} />}

      <p className="internship__summary">{item.summary}</p>

      <ul className="internship__responsibilities">
        {item.responsibilities.map((duty) => (
          <li key={duty}>{duty}</li>
        ))}
      </ul>

      <div className="internship__highlights">
        {item.highlights.map((highlight) => (
          <span key={highlight} className="internship__highlight">
            {highlight}
          </span>
        ))}
      </div>
    </div>
  )
}
