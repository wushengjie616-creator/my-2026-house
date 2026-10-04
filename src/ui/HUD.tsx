import { profile } from '../data/profile'

export function HUD() {
  return (
    <div className="hud">
      <span className="hud__hint">Drag to look around · Scroll to zoom · Click to explore</span>
      <span className="hud__brand">{profile.siteTitle}</span>
    </div>
  )
}
