import React, { FC } from 'react'
import { Col, Row } from 'react-bootstrap'
import differenceInDays from 'date-fns/differenceInDays'
import parse from 'date-fns/parse'

import styles from './styles'

interface Props {
  content: string
  due: string
}

const BASE_FONT_SIZE = 25

const TodoListItem: FC<Props> = ({ content, due }) => {
  const today = new Date()
  const dueDate = parse(due, 'yyyy-L-dd', today)
  const difference = differenceInDays(today, dueDate) * 5
  const fontSize = BASE_FONT_SIZE + difference
  const style = {
    ...styles.todoItem,
    fontSize: `${fontSize}px`,
  }

  return (
    <Row style={style}>
      <Col md={1} style={styles.listBullet}>
        ◦
      </Col>
      <Col md={11} style={styles.listContent}>
        {content}
      </Col>
    </Row>
  )
}

export default TodoListItem
