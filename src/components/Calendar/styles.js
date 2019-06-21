import styled from 'styled-components'
import { Calendar } from 'react-big-calendar'
import { colors } from '../../config/colors'

export const CalendarComponent = styled(Calendar)`
  align-self: center;
  width: 100%;
  margin: 50px;
  padding: 30px;
  border: 1px solid ${colors.lightgrey};
`
