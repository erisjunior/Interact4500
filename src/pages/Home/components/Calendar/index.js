import React from 'react'

import moment from 'moment'

import { CalendarComponent } from './styles'

import { momentLocalizer } from 'react-big-calendar'
const localizer = momentLocalizer(moment)

const Calendar = props => (
  <CalendarComponent
    style={{ height: 700 }}
    events={props.events}
    localizer={localizer}
    startAccessor='start'
    endAccessor='end'
  />
)

export default Calendar
