import React, { FC } from 'react'
import { connect } from 'react-redux'

import styles from './styles'

interface GoogleImage {
  caption: string
  created_at: string
  from_number: string
  id: number
  query: string
  updated_at: string
  url: string
}

interface Props {
  googleImages: GoogleImage[]
}

const GoogleImages: FC<Props> = ({ googleImages = []}) => {
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

  const firstImages = googleImages.slice(0, 3)
  const middleImages = googleImages.slice(3, 6)
  const lastImages = googleImages.slice(6, 9)

  return (
    <div style={styles.imagesContainer}>
    <div style={styles.imagesRow}>{imageRow(firstImages)}</div>
    <div style={styles.imagesRow}>{imageRow(middleImages)}</div>
    <div style={styles.imagesRow}>{imageRow(lastImages)}</div>
    </div>
  )
}

const mapStateToProps = (state: any) => {
  const { googleImages } = state.app

  return { googleImages }
}

export default connect(mapStateToProps)(GoogleImages)
