import { API } from '../base'
import { ENDPOINTS } from '../endpoints'
import { TRANSFORMER } from '../transformers'
import { FormattedWeatherData } from '../../../types'

const loadAll = async (): Promise<FormattedWeatherData[]> => {
  const { data } = await API.get(ENDPOINTS.weather)

  return TRANSFORMER.weather(data)
}

export const weather = { loadAll }
