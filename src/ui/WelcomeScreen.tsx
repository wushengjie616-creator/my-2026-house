interface WelcomeScreenProps {
  onEnter: () => void
}

export function WelcomeScreen({ onEnter }: WelcomeScreenProps) {
  return (
    <div className="welcome">
      <div className="welcome__card">
        <span className="welcome__eyebrow">🏡</span>
        <h1 className="welcome__title">Welcome to My 2026 House</h1>
        <p className="welcome__subtitle">A tiny interactive place for my 2026 memories.</p>
        <p className="welcome__hint">Drag to look around. Click anything you're curious about.</p>
        <button className="welcome__button" type="button" onClick={onEnter}>
          Enter
        </button>
      </div>
    </div>
  )
}
