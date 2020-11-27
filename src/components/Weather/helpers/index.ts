import { format } from 'date-fns'
import sub from 'date-fns/sub'
import isAfter from 'date-fns/isAfter'
import { utcToZonedTime } from 'date-fns-tz'
import fromUnixTime from 'date-fns/fromUnixTime'

import { WeatherData } from '../../../types'

const emptyObject = { temp: 0, time: '' }
const emptyArray = new Array(8).fill(emptyObject)

export const getPaddedArray = (arr: any[]) => {
  const forecastBucketCount = 8
  const start = forecastBucketCount - arr.length
  emptyArray.splice(start, arr.length)

  return emptyArray.concat(arr)
}

export const getAverage = (data: any[]) => {
  const temps = data.filter(({ temp }) => temp > 0).map(({ temp }) => temp)

  if (temps.length === 0) return '-'

  const sum = temps.reduce((a, b) => a + b)

  return Math.round(sum / temps.length)
}

export const matchDayname = (unix: number, target: string) => {
  const time = fromUnixTime(unix)
  const twoHoursAgo = sub(time, { hours: 2 })

  return format(time, 'EEEE') === target && isAfter(time, twoHoursAgo)
}

const convertUnix = (unix: number) => {
  const time = fromUnixTime(unix)
  const timeInEst = utcToZonedTime(time, 'America/New_York')
  return format(timeInEst, 'ha')
}

export const getTempObject = (weather: WeatherData[], day: string) => {
  return weather
    .filter(({ unix_time: unixTime }) => matchDayname(unixTime, day))
    .map((matchingTempObject) => {
      const {
        precip_chance: precipChance,
        temperature,
        unix_time: unixTime,
      } = matchingTempObject

      return {
        temp: temperature,
        precip: precipChance,
        time: convertUnix(unixTime),
      }
    })
}
