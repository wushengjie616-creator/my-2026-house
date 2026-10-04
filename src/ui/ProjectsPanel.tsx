import { useState } from 'react'
import { useInteraction } from '../interactions/interactionContext'
import { projects2026, projectsGrowthTrail2026 } from '../data/projects2026'
import type { Project2026 } from '../data/projects2026'

/**
 * Projects 面板：从 My 2026 Desktop 的 Projects 入口打开。
 * 顶部是一条轻量的成长轨迹（Personal Product → Backend System → Data System → Agent System），
 * 中间是四个项目的导航（默认打开第一个），下方是单项目详情。
 * 所有项目内容来自 projects2026.ts，组件自身不写死项目正文。
 */
export function ProjectsPanel() {
  const { activePanel, closePanel, openPanel } = useInteraction()
  const [activeIndex, setActiveIndex] = useState(0)

  if (activePanel !== 'projects') return null

  const active = projects2026[activeIndex]

  return (
    <div className="proj__backdrop" onClick={closePanel}>
      <div className="proj" onClick={(event) => event.stopPropagation()}>
        <button className="proj__back" type="button" onClick={() => openPanel('desktop')}>
          ← Back to Desktop
        </button>
        <button className="proj__close" type="button" onClick={closePanel} aria-label="Close">
          ×
        </button>

        <h2 className="proj__heading">2026 Projects</h2>
        <p className="proj__sub">Things I built while learning how software works.</p>

        <div className="proj__trail">
          {projectsGrowthTrail2026.map((node, index) => (
            <div key={node.en} className="proj__trail-step">
              <div className="proj__trail-node">
                <span className="proj__trail-en">{node.en}</span>
                <span className="proj__trail-zh">{node.zh}</span>
              </div>
              {index < projectsGrowthTrail2026.length - 1 && (
                <span className="proj__trail-arrow" aria-hidden="true">
                  →
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="proj__nav">
          {projects2026.map((project, index) => (
            <button
              key={project.id}
              type="button"
              className={`proj__nav-item${index === activeIndex ? ' proj__nav-item--active' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <span className="proj__nav-num">0{index + 1}</span>
              <span className="proj__nav-name">{project.navShort}</span>
            </button>
          ))}
        </div>

        <ProjectDetail project={active} index={activeIndex} />
      </div>
    </div>
  )
}

function ProjectDetail({ project, index }: { project: Project2026; index: number }) {
  const displayName = project.nameEn ?? project.name
  const showSecondary = Boolean(project.nameEn && project.name !== project.nameEn)
  const architecture = project.architecture

  return (
    <div className={`proj__detail proj__detail--${index}`}>
      <div className="proj__detail-head">
        <div>
          <h3 className="proj__detail-name">{displayName}</h3>
          {showSecondary && <p className="proj__detail-name-zh">{project.name}</p>}
        </div>
        <StatusBadge status={project.status} />
      </div>

      <div className="proj__category">{project.category}</div>
      <p className="proj__tagline">{project.tagline}</p>
      <p className="proj__description">{project.description}</p>

      {architecture && (
        <div className="proj__architecture">
          <h4 className="proj__section-title">Architecture</h4>
          <div className="proj__flow">
            {architecture.map((step, i) => (
              <div key={step} className="proj__flow-step">
                <span className="proj__flow-node">{step}</span>
                {i < architecture.length - 1 && (
                  <span className="proj__flow-arrow" aria-hidden="true">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="proj__section">
        <h4 className="proj__section-title">What I Built</h4>
        <p className="proj__section-text">{project.whatIBuilt}</p>
      </div>

      <div className="proj__section">
        <h4 className="proj__section-title">What I Learned</h4>
        <p className="proj__section-text">{project.whatILearned}</p>
      </div>

      <div className="proj__section">
        <h4 className="proj__section-title">Built With</h4>
        <div className="proj__tech">
          {project.technologies.map((tech) => (
            <span key={tech} className="proj__tech-item">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {project.status === 'open-source' && project.githubUrl && (
        <a
          className="proj__github"
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub ↗
        </a>
      )}
    </div>
  )
}

function StatusBadge({ status }: { status: Project2026['status'] }) {
  const label =
    status === 'open-source'
      ? 'Open Source'
      : status === 'private'
        ? 'Private Project'
        : 'In Development'
  return <span className={`proj__status proj__status--${status}`}>{label}</span>
}
