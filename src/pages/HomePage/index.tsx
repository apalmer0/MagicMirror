import React, { FC, useEffect, useState } from 'react'

import { API } from '../../lib/api'
import { FormattedGoogleImage } from '../../types'
import Clock from '../../components/Clock'
import GoogleImages from '../../components/GoogleImages'
import TodoList from '../../components/TodoList'
import Trivia from '../../components/Trivia'
import Weather from '../../components/Weather'
import styles from './styles'

const FIVE_SECONDS = 5000

const HomePage: FC = () => {
  const [googleImages, setGoogleImages] = useState<FormattedGoogleImage[]>([])

  useEffect(() => {
    const fiveSecondTimer = setInterval(async () => {
      setGoogleImages(await API.googleImage.loadAll())
    }, FIVE_SECONDS)

    return () => {
      clearInterval(fiveSecondTimer)
    }
  }, [])

  return (
    <div style={styles.container}>
      {googleImages.length > 0 ? (
        <GoogleImages images={googleImages} />
      ) : (
        <div style={styles.homepageContainer}>
          <div style={styles.topRow}>
            <Clock />
            <TodoList />
          </div>
          <Trivia />
          <Weather />
        </div>
      )}
    </div>
  )
}

export default HomePage
