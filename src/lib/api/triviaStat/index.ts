import { API } from '../base'
import { ENDPOINTS } from '../endpoints'
import { TRANSFORMER } from '../transformers'
import { FormattedTriviaStat } from '../../../types'

const loadAll = async (): Promise<FormattedTriviaStat> => {
  const { data } = await API.get(ENDPOINTS.triviaStats)

  return TRANSFORMER.triviaStat(data)
}

export const triviaStat = { loadAll }
