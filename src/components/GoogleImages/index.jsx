import React, { Component } from 'react'
import { arrayOf, number, shape, string } from 'prop-types'
import { connect } from 'react-redux'
import { slice } from 'lodash'

import styles from './styles'

class GoogleImages extends Component {
  imageRow = (collection) => {
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

  render() {
    const { googleImages } = this.props
    const firstImages = slice(googleImages, 0, 3)
    const middleImages = slice(googleImages, 3, 6)
    const lastImages = slice(googleImages, 6, 9)

    return (
      <div style={styles.imagesContainer}>
        <div style={styles.imagesRow}>{this.imageRow(firstImages)}</div>
        <div style={styles.imagesRow}>{this.imageRow(middleImages)}</div>
        <div style={styles.imagesRow}>{this.imageRow(lastImages)}</div>
      </div>
    )
  }
}

GoogleImages.propTypes = {
  googleImages: arrayOf(
    shape({
      caption: string,
      created_at: string,
      from_number: string,
      id: number,
      query: string,
      updated_at: string,
      url: string,
    }),
  ),
}

GoogleImages.defaultProps = {
  googleImages: [],
}

const mapStateToProps = (state) => {
  const { googleImages } = state.app

  return { googleImages }
}

export default connect(mapStateToProps)(GoogleImages)
