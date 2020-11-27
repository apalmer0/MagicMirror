import { API } from '../base'
import { ENDPOINTS } from '../endpoints'
import { GoogleImage } from '../../../types'

const loadAll = async (): Promise<GoogleImage[]> => {
  const { data } = await API.get(ENDPOINTS.googleImages)

  return data
}

export const googleImage = { loadAll }
