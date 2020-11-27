import { API } from '../base'
import { ENDPOINTS } from '../endpoints'
import { WeatherData } from '../../../types'

const loadAll = async (): Promise<WeatherData[]> => {
  const { data } = await API.get(ENDPOINTS.weather)

  return data
}

export const weather = { loadAll }
