import { API } from '../base'
import { ENDPOINTS } from '../endpoints'
import { TriviaStat } from '../../../types'

const loadAll = async (): Promise<TriviaStat> => {
  const { data } = await API.get(ENDPOINTS.triviaStats)

  return data
}

export const triviaStat = { loadAll }
