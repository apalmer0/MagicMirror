import React, { FC } from 'react'
import add from 'date-fns/add'
import { format } from 'date-fns'

import { getAverage, getTempObject, getPaddedArray } from './helpers'
import { WeatherData } from '../../types'
import styles from './styles'
import WeatherChart from '../WeatherChart'

interface Props {
  weather?: WeatherData[]
}

const Weather: FC<Props> = ({ weather }) => {
  const now = new Date()

  const today = format(now, 'EEEE')
  const tomorrow = format(add(now, { days: 1 }), 'EEEE')

  if (!weather) return null

  const tempsToday = getPaddedArray(getTempObject(weather, today))
  const tempsTomorrow = getTempObject(weather, tomorrow)
  const todayAvg = getAverage(tempsToday)
  const tomorrowAvg = getAverage(tempsTomorrow)

  return (
    <div style={styles.content}>
      <h1 style={styles.header}>today (avg: {todayAvg}° F)</h1>
      <WeatherChart data={tempsToday} />

      <h1 style={styles.header}>tomorrow (avg: {tomorrowAvg}° F)</h1>
      <WeatherChart data={tempsTomorrow} />
    </div>
  )
}

export default Weather
