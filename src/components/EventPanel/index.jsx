import React, { useContext } from 'react'
import EventCalendar from '../EventCalendar'
import { ZoomContext } from '../../context/ZoomContext'
import './styles.css'

const EventPainel = ({ items }) => {
  const { isZoomed, toogleZoom } = useContext(ZoomContext)

  return (
    <section>
      <div className="panel-header">
        <h1>Events Timeline</h1>
        <button onClick={toogleZoom}>
          {!isZoomed ? 'Zoom in' : 'Zoom out'}
        </button>
      </div>
      <EventCalendar events={items} />
    </section>
  )
}

export default EventPainel
