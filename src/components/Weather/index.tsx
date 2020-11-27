import React, { FC } from 'react'
import add from 'date-fns/add'
import { format } from 'date-fns'

import { WeatherData } from '../../types'
import Chart from '../Chart'
import { getAverage, getTempObject, getPaddedArray } from './helpers'
import styles from './styles'

const UNITS = 'F'

interface Props {
  weather: WeatherData[]
}

const Weather: FC<Props> = ({ weather }) => {
  const now = new Date()

  const today = format(now, 'EEEE')
  const tomorrow = format(add(now, { days: 1 }), 'EEEE')

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

export default Weather
