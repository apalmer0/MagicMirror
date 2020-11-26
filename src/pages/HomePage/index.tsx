import React, { FC, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'

import Clock from '../../components/Clock'
import {
  GoogleImage,
  Todo,
  TriviaItem,
  TriviaStat,
  WeatherData,
} from '../../types'
import GoogleImages from '../../components/GoogleImages'
import TodoList from '../../components/TodoList'
import Trivia from '../../components/Trivia'
import Weather from '../../components/Weather'
import styles from './styles'

const ONE_HOUR = 1000 * 60 * 60 * 1
const FIVE_SECONDS = 5000
const actions = {
  fetchGoogleImages: () => true,
  fetchTodoItems: () => true,
  fetchTriviaItems: () => true,
  fetchTriviaStats: () => true,
  fetchWeather: () => true,
}

const HomePage: FC = () => {
  const googleImages: GoogleImage[] = []
  const list: Todo[] = []
  const triviaItems: TriviaItem[] = []
  const triviaStats: TriviaStat = { today: 1, all_time: 0 }
  const weatherData: WeatherData[] = [
    {
      id: 1,
      precip_chance: 10,
      temperature: 40,
      unix_time: '1606415340',
    },
  ]

  useEffect(() => {
    const fiveSecondTimer = setInterval(() => {
      actions.fetchGoogleImages()
      actions.fetchTodoItems()
      actions.fetchTriviaItems()
      actions.fetchTriviaStats()
      actions.fetchWeather()
    }, FIVE_SECONDS)
    const oneHourTimer = setInterval(actions.fetchWeather, ONE_HOUR)

    return () => {
      clearInterval(fiveSecondTimer)
      clearInterval(oneHourTimer)
    }
  }, [])

  return (
    <div>
      {googleImages.length > 0 ? (
        <GoogleImages images={googleImages} />
      ) : (
        <div style={styles.homepageContainer}>
          <Row>
            <Col md={6} style={styles.halfPage}>
              <Clock />
            </Col>
            <Col md={6} style={styles.halfPage}>
              <TodoList list={list} />
            </Col>
          </Row>
          <Row>
            <Trivia triviaItems={triviaItems} triviaStats={triviaStats} />
          </Row>
          <Weather weather={weatherData} />
        </div>
      )}
    </div>
  )
}

export default HomePage
