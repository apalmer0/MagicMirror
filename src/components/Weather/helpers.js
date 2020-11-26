import { filter, round, sum } from 'lodash'
import { format } from 'date-fns'
import sub from 'date-fns/sub'
import isAfter from 'date-fns/isAfter'
import { utcToZonedTime } from 'date-fns-tz'
import fromUnixTime from 'date-fns/fromUnixTime'

const getPaddedArray = (arr) => {
  const emptyObject = {
    time: '',
    temp: 0,
  }
  const emptyData = new Array(8).fill(emptyObject)
  const forecastBucketCount = 8
  const start = forecastBucketCount - arr.length
  emptyData.splice(start, arr.length)

  return emptyData.concat(arr)
}

const getAverage = (data) => {
  const temps = filter(data, (val) => val.temp > 0).map((val) => val.temp)

  if (temps.length === 0) return '-'

  return round(sum(temps) / temps.length)
}

const matchDayname = (unix, target) => {
  const time = fromUnixTime(unix)
  const twoHoursAgo = sub(time, { hours: 2 })

  return format(time, 'EEEE') === target && isAfter(time, twoHoursAgo)
}

const convertUnix = (unix) => {
  const time = fromUnixTime(unix)
  const timeInEst = utcToZonedTime(time, 'America/New_York')
  return format(timeInEst, 'ha')
}

const getTempObject = (weather, day) => {
  return filter(weather, ({ unix_time: unixTime }) => {
    return matchDayname(unixTime, day)
  }).map((matchingTempObject) => {
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

export default {
  getAverage,
  getPaddedArray,
  getTempObject,
  matchDayname,
}
