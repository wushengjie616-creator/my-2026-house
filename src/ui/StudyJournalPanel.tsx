import { useState } from 'react'
import { useInteraction } from '../interactions/interactionContext'
import { academic2026 } from '../data/academic2026'

type SectionId = 'profile' | 'courses' | 'coursework' | 'patent' | 'next'

const SECTIONS: { id: SectionId; label: string }[] = [
  { id: 'profile', label: 'PROFILE' },
  { id: 'courses', label: 'COURSES' },
  { id: 'coursework', label: 'COURSEWORK' },
  { id: 'patent', label: 'PATENT' },
  { id: 'next', label: 'NEXT' },
]

/**
 * 学业手账面板：点击书房书桌上的 Study Journal 打开。
 * 左侧是五个章节标签，右侧是「笔记 / 便签 / 时间线」风格的章节内容。
 * 所有文字来自 academic2026.ts，组件自身不写死内容。
 */
export function StudyJournalPanel() {
  const { activePanel, closePanel } = useInteraction()
  const [activeId, setActiveId] = useState<SectionId>('profile')

  if (activePanel !== 'academic') return null

  return (
    <div className="study__backdrop" onClick={closePanel}>
      <div className="study" onClick={(event) => event.stopPropagation()}>
        <button className="study__close" type="button" onClick={closePanel} aria-label="Close">
          ×
        </button>

        <h2 className="study__heading">My 2026 Study Journal</h2>
        <p className="study__sub">智能感知工程 · 2026</p>

        <div className="study__body">
          <nav className="study__nav">
            {SECTIONS.map((section) => (
              <button
                key={section.id}
                type="button"
                className={`study__tab${section.id === activeId ? ' study__tab--active' : ''}`}
                onClick={() => setActiveId(section.id)}
              >
                {section.label}
              </button>
            ))}
          </nav>

          <div className="study__content">
            {activeId === 'profile' && <ProfileSection />}
            {activeId === 'courses' && <CoursesSection />}
            {activeId === 'coursework' && <CourseworkSection />}
            {activeId === 'patent' && <PatentSection />}
            {activeId === 'next' && <NextSection />}
          </div>
        </div>
      </div>
    </div>
  )
}

function ProfileSection() {
  return (
    <div className="study__section">
      <div className="study__chip">01 · PROFILE</div>
      <div className="study__major">{academic2026.major}</div>
      <div className="study__ranking-badge">{academic2026.rankingLabel}</div>
      <p className="study__text">{academic2026.ranking}</p>
    </div>
  )
}

function CoursesSection() {
  return (
    <div className="study__section">
      <div className="study__chip">02 · COURSES</div>
      <div className="study__cards">
        {academic2026.courses.map((course) => (
          <div key={course.id} className="study__note">
            {course.name}
          </div>
        ))}
      </div>
    </div>
  )
}

function CourseworkSection() {
  return (
    <div className="study__section">
      <div className="study__chip">03 · COURSEWORK</div>
      <p className="study__lead">{academic2026.courseworkSummary}</p>
      <div className="study__projects">
        {academic2026.courseworkProjects.map((project) => (
          <div key={project.id} className="study__project">
            {project.image && (
              <img className="study__photo" src={project.image} alt={project.name} />
            )}
            <div className="study__project-name">{project.name}</div>
            <p className="study__project-desc">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function PatentSection() {
  const { patent } = academic2026
  return (
    <div className="study__section">
      <div className="study__chip">04 · PATENT</div>
      <div className="study__patent-topic">{patent.topic}</div>
      <div className="study__patent-status">{patent.status}</div>
      {patent.image && (
        <img className="study__photo" src={patent.image} alt={patent.topic} />
      )}
      <div className="study__timeline">
        {patent.steps.map((step) => (
          <div key={step.timeLabel} className="study__timeline-step">
            <div className="study__timeline-time">{step.timeLabel}</div>
            <div className="study__timeline-label">{step.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function NextSection() {
  const { milestone } = academic2026
  return (
    <div className="study__section study__section--next">
      <div className="study__chip">05 · NEXT CHAPTER</div>
      <div className="study__milestone-title">{milestone.title}</div>
      {milestone.image && (
        <img className="study__photo" src={milestone.image} alt={milestone.title} />
      )}
      <p className="study__milestone-desc">{milestone.description}</p>
      <p className="study__milestone-next">{milestone.nextStep}</p>
    </div>
  )
}
