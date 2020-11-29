import React, { FC, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'

import { API } from '../../lib/api'
import {
  FormattedGoogleImage,
  Todo,
  FormattedTriviaItem,
  FormattedTriviaStat,
  FormattedWeatherData,
} from '../../types'
import Clock from '../../components/Clock'
import GoogleImages from '../../components/GoogleImages'
import TodoList from '../../components/TodoList'
import Trivia from '../../components/Trivia'
import Weather from '../../components/Weather'
import styles from './styles'

const ONE_HOUR = 1000 * 60 * 60 * 1
const FIVE_SECONDS = 5000

const HomePage: FC = () => {
  const [googleImages, setGoogleImages] = useState<FormattedGoogleImage[]>([])
  const [todoList, setTodoList] = useState<Todo[]>([])
  const [triviaItems, setTriviaItems] = useState<FormattedTriviaItem[]>([])
  const [triviaStats, setTriviaStats] = useState<FormattedTriviaStat>()
  const [weatherData, setWeatherData] = useState<FormattedWeatherData[]>()

  useEffect(() => {
    const fiveSecondTimer = setInterval(async () => {
      setGoogleImages(await API.googleImage.loadAll())
      setTodoList(await API.todoItem.loadAll())
      setTriviaItems(await API.triviaItem.loadAll())
      setTriviaStats(await API.triviaStat.loadAll())
    }, FIVE_SECONDS)
    const oneHourTimer = setInterval(async () => {
      setWeatherData(await API.weather.loadAll())
    }, ONE_HOUR)

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
              <TodoList list={todoList} />
            </Col>
          </Row>
          <Row>
            {triviaItems.length > 0 && (
              <Trivia triviaItems={triviaItems} triviaStats={triviaStats} />
            )}
          </Row>
          {weatherData && <Weather weather={weatherData} />}
        </div>
      )}
    </div>
  )
}

export default HomePage
