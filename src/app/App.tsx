import { useState } from 'react'
import { InteractionProvider } from '../interactions/InteractionManager'
import { SceneCanvas } from './SceneCanvas'
import { WelcomeScreen } from '../ui/WelcomeScreen'
import { LoadingScreen } from '../ui/LoadingScreen'
import { HUD } from '../ui/HUD'
import { InfoCard } from '../ui/InfoCard'
import { TravelAlbumPanel } from '../ui/TravelAlbumPanel'
import { StudyJournalPanel } from '../ui/StudyJournalPanel'
import { GamesPhonePanel } from '../ui/GamesPhonePanel'
import { InternshipPanel } from '../ui/InternshipPanel'
import { EngineeringToolkitPanel } from '../ui/EngineeringToolkitPanel'
import { DesktopPanel } from '../ui/DesktopPanel'
import { ProjectsPanel } from '../ui/ProjectsPanel'

/**
 * 应用顶层：只负责「进入前 / 进入后」这一层页面状态，
 * 以及把 3D 场景和 UI 覆盖层摆在一起。
 * 所有具体的 3D 内容都在 World 下面，不写在这里。
 */
export default function App() {
  const [entered, setEntered] = useState(false)
  const [ready, setReady] = useState(false)

  return (
    <InteractionProvider>
      {!entered ? (
        <WelcomeScreen onEnter={() => setEntered(true)} />
      ) : (
        <>
          <SceneCanvas onReady={() => setReady(true)} />
          {!ready && <LoadingScreen />}
          <HUD />
          <InfoCard />
          <TravelAlbumPanel />
          <StudyJournalPanel />
          <GamesPhonePanel />
          <InternshipPanel />
          <DesktopPanel />
          <EngineeringToolkitPanel />
          <ProjectsPanel />
        </>
      )}
    </InteractionProvider>
  )
}
