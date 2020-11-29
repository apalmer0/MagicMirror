import { FormattedGoogleImage, GoogleImage } from '../../../../types'

export const googleImage = (images: GoogleImage[]): FormattedGoogleImage[] =>
  images.map(({ id, url }) => ({ id, url }))
