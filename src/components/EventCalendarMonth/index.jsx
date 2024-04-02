import React, { useEffect, useState } from 'react'
import './styles.css'

const EventCalendarMonth = ({ name, start, end, lastDate }) => {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEnDate] = useState('')

  useEffect(() => {
    const idStartDateDiv = document.getElementById(start)
    const idEndDateDiv = document.getElementById(end)

    if (idStartDateDiv && idEndDateDiv) {
      setStartDate(idStartDateDiv)
      setEnDate(idEndDateDiv)
    } else {
      setStartDate(idStartDateDiv)
      const idLastMonthEndDiv = document.getElementById(lastDate)
      setEnDate(idLastMonthEndDiv)
    }
  }, [])

  const monthStyle = {
    width: `${endDate.offsetLeft - startDate.offsetLeft + 26}px`,
    minWidth: `${endDate.offsetLeft - startDate.offsetLeft + 26}px`,
    left: `${startDate.offsetLeft}px`,
    right: `${endDate.offsetLeft}px`,
  }

  return (
    <div key={name} className="month" style={monthStyle}>
      {name}
    </div>
  )
}

export default EventCalendarMonth
