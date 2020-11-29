import { API } from '../base'
import { ENDPOINTS } from '../endpoints'
import { TRANSFORMER } from '../transformers'
import { FormattedGoogleImage } from '../../../types'

const loadAll = async (): Promise<FormattedGoogleImage[]> => {
  const { data } = await API.get(ENDPOINTS.googleImages)

  return TRANSFORMER.googleImage(data)
}

export const googleImage = { loadAll }
