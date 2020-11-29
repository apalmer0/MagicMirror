import { API } from '../base'
import { ENDPOINTS } from '../endpoints'
import { TRANSFORMER } from '../transformers'
import { FormattedTriviaItem } from '../../../types'

const loadAll = async (): Promise<FormattedTriviaItem[]> => {
  const { data } = await API.get(ENDPOINTS.triviaItems)

  return TRANSFORMER.triviaItem(data)
}

export const triviaItem = { loadAll }
