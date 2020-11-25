import React, { FC } from 'react'
import { connect } from 'react-redux'

import helpers from './helpers'
import Chart from '../Chart'
import styles from './styles'

const UNITS = 'F'
const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

interface Weather {
  id: number,
  precip_chance: number,
  temperature: number,
  unix_time: string,
}

interface Props {
  weather: Weather[]
}

const Weather: FC<Props> = ({ weather = [] }) => {
  const todayDate = new Date()
  const todayNumber = todayDate.getDay()
  const tomorrowNumber = (todayNumber + 1) % 7

  const today = DAYS[todayNumber]
  const tomorrow = DAYS[tomorrowNumber]
  const { getAverage, getTempObject, getPaddedArray } = helpers

  if (!weather) return null

  const tempsToday = getTempObject(weather, today)
  const tempsTomorrow = getTempObject(weather, tomorrow)

  return (
    <div style={styles.content}>
      <h1 style={styles.header}>
        today (avg: {getAverage(tempsToday)}° {UNITS})
      </h1>
      <Chart data={getPaddedArray(tempsToday)} />
      <h1 style={styles.header}>
        tomorrow (avg: {getAverage(tempsTomorrow)}° {UNITS})
      </h1>
      <Chart data={tempsTomorrow} />
    </div>
  )
}

const mapStateToProps = (state: any) => {
  const { weather } = state.app

  return { weather }
}

export default connect(mapStateToProps)(Weather)
