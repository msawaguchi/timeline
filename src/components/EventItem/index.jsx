import React, { useEffect, useState, useContext } from 'react'
import { ZoomContext } from '../../context/ZoomContext'
import './styles.css'

const EventItem = ({ start, end, name, index }) => {
  const { isZoomed } = useContext(ZoomContext)
  const [startDate, setStartDate] = useState('')
  const [endDate, setEnDate] = useState('')
  const [eventName, setEventName] = useState(name)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const idStartDateDiv = document.getElementById(start)
    const idEndDateDiv = document.getElementById(end)

    if (idStartDateDiv && idEndDateDiv) {
      setStartDate(idStartDateDiv)
      setEnDate(idEndDateDiv)
    }
  }, [])

  const eventStyle = {
    width: `${endDate.offsetLeft - startDate.offsetLeft + 12}px`,
    position: 'absolute',
    top: isZoomed ? index * 36 : 16,
    left: `${startDate.offsetLeft}px`,
    right: `${endDate.offsetLeft}px`,
    border: isZoomed ? 'none' : '1px solid #15887b',
  }

  const showTooltip = () => {
    setIsVisible(true)
  }

  const hideTooltip = () => {
    setIsVisible(false)
  }

  return (
    <div
      className="event"
      style={eventStyle}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      <input
        type="text"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
      />
      {isVisible && (
        <div className=" tool">
          <span>
            <b>Event: </b>
            {index} - {eventName}
          </span>
          <p>
            <b>Start: </b>
            {start}
          </p>
          <p>
            <b>End: </b>
            {end}
          </p>
        </div>
      )}
    </div>
  )
}

export default EventItem
