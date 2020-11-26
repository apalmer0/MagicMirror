import React, { FC } from 'react'

import { GoogleImage } from '../../types'
import styles from './styles'

interface Props {
  images: GoogleImage[]
}

const GoogleImages: FC<Props> = ({ images = [] }) => {
  const imageRow = (collection: GoogleImage[]) => {
    return collection.map((image) => (
      <div
        key={image.id}
        style={{
          backgroundImage: `url(${image.url})`,
          ...styles.imageStyle,
        }}
      />
    ))
  }

  const firstImages = images.slice(0, 3)
  const middleImages = images.slice(3, 6)
  const lastImages = images.slice(6, 9)

  return (
    <div style={styles.imagesContainer}>
      <div style={styles.imagesRow}>{imageRow(firstImages)}</div>
      <div style={styles.imagesRow}>{imageRow(middleImages)}</div>
      <div style={styles.imagesRow}>{imageRow(lastImages)}</div>
    </div>
  )
}

export default GoogleImages
