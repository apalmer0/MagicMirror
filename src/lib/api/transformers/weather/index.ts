import { FormattedWeatherData, WeatherData } from '../../../../types'

export const weather = (forecastDays: WeatherData[]): FormattedWeatherData[] =>
  forecastDays.map((forecastDay) => ({
    id: forecastDay.id,
    precip: forecastDay.precip_chance,
    temp: forecastDay.temperature,
    unix: forecastDay.unix_time,
  }))
