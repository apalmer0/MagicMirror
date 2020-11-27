import { API } from '../base'
import { ENDPOINTS } from '../endpoints'
import { TriviaItem } from '../../../types'

const loadAll = async (): Promise<TriviaItem[]> => {
  const { data } = await API.get(ENDPOINTS.triviaItems)

  return data
}

export const triviaItem = { loadAll }
