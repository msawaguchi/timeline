import React from 'react'
import { render } from 'react-dom'
import timelineItems from './timelineItems'
import EventPainel from './components/EventPanel'
import { ZoomContextProvider } from './context/ZoomContext'
import './global.css'

const App = () => (
  <ZoomContextProvider>
    <main>
      <h2>Something magic happened {'\u2728'}!</h2>
      <h3>{timelineItems.length} timeline items to render</h3>
      <EventPainel items={timelineItems} />
    </main>
  </ZoomContextProvider>
)

render(<App />, document.getElementById('root'))
