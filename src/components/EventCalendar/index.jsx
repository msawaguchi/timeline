import React from 'react'
import EventItem from '../EventItem'
import EventCalendarMonth from '../EventCalendarMonth'
import './styles.css'

const EventCalendar = ({ events }) => {
  const { minDate, maxDate } = findMinMaxDates(events)
  const datesInRange = getAllDatesInRange(minDate, maxDate)
  const monthsInRange = getMonthsInRange(minDate, maxDate)

  return (
    <div className="timeline-painel">
      <div className="timeline-header-months">
        {monthsInRange &&
          monthsInRange.map((month) => (
            <EventCalendarMonth
              key={month.name}
              start={month.start}
              end={month.end}
              lastDate={maxDate}
              className="month"
              name={month.name}
            />
          ))}
      </div>
      <div className="timeline-header-days">
        {datesInRange &&
          datesInRange.map((date) => (
            <div key={date} id={date} className="day">
              {date.substring(8)}
            </div>
          ))}
      </div>
      <div className="events">
        {events &&
          events.map((e) => (
            <EventItem
              key={e.id}
              start={e.start}
              end={e.end}
              name={e.name}
              index={e.id}
            />
          ))}
      </div>
    </div>
  )
}

export default EventCalendar

function findMinMaxDates(items) {
  let minDate = items[0].start
  let maxDate = items[0].end

  items.forEach((item) => {
    if (item.start < minDate) {
      minDate = item.start
    }
    if (item.end > maxDate) {
      maxDate = item.end
    }
  })

  return { minDate, maxDate }
}

function getMonthsInRange(start, end) {
  const monthsNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const startYear = parseInt(start.substring(0, 4), 10)
  const startMonth = parseInt(start.substring(5, 7), 10)
  const endYear = parseInt(end.substring(0, 4), 10)
  const endMonth = parseInt(end.substring(5, 7), 10)

  const months = []

  for (let year = startYear; year <= endYear; year++) {
    const startMonthIndex = year === startYear ? startMonth - 1 : 0
    const endMonthIndex = year === endYear ? endMonth - 1 : 11

    for (let month = startMonthIndex; month <= endMonthIndex; month++) {
      const startDate = new Date(year, month, 1)
      const endDate = new Date(year, month + 1, 0)
      const monthName = monthsNames[month]

      months.push({
        name: monthName,
        start: startDate.toISOString().split('T')[0],
        end: endDate.toISOString().split('T')[0],
      })
    }
  }

  return months
}

function getAllDatesInRange(minDate, maxDate) {
  const datesArray = []
  const currentDate = new Date(minDate)

  while (currentDate <= new Date(maxDate)) {
    datesArray.push(currentDate.toISOString().split('T')[0])
    currentDate.setDate(currentDate.getDate() + 1)
  }

  return datesArray
}
