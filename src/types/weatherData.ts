export interface WeatherChartData {
  display: boolean
  precip: number
  temp: number
  time: string
}

export interface WeatherData {
  id: number
  precip_chance: number
  temperature: number
  unix_time: number
}

export interface FormattedWeatherData {
  id: number
  precip: number
  temp: number
  unix: number
}
