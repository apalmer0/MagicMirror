import { format } from 'date-fns'
import sub from 'date-fns/sub'
import isAfter from 'date-fns/isAfter'
import { utcToZonedTime } from 'date-fns-tz'
import fromUnixTime from 'date-fns/fromUnixTime'

import { WeatherChartData, WeatherData } from '../../../types'

const forecastBucketCount = 8
const emptyObject = { temp: 0, time: '' }
const emptyArray = new Array(8).fill(emptyObject)

export const getPaddedArray = (arr: any[]) => {
  const start = forecastBucketCount - arr.length
  emptyArray.splice(start, arr.length)

  return emptyArray.concat(arr)
}

export const getAverage = (data: WeatherChartData[]) => {
  const displayedTemps = data.filter(({ display }) => display)
  const sum = displayedTemps.reduce((acc, curr) => acc + curr.temp, 0)

  return Math.round(sum / displayedTemps.length)
}

const matchDayname = (unix: number, target: string) => {
  const time = fromUnixTime(unix)

  return format(time, 'EEEE') === target
}

const timeIsCurrentOrFuture = (unix: number) => {
  const now = new Date()
  const time = fromUnixTime(unix)
  const twoHoursAgo = sub(now, { hours: 2 })

  return isAfter(time, twoHoursAgo)
}

const convertUnix = (unix: number) => {
  const time = fromUnixTime(unix)
  const timeInEst = utcToZonedTime(time, 'America/New_York')
  return format(timeInEst, 'ha')
}

export const getTempObject = (
  weather: WeatherData[],
  day: string,
): WeatherChartData[] =>
  weather
    .filter(({ unix_time }) => matchDayname(unix_time, day))
    .map(({ unix_time: unix, precip_chance: precip, temperature: temp }) => ({
      display: timeIsCurrentOrFuture(unix),
      precip,
      temp,
      time: convertUnix(unix),
    }))
