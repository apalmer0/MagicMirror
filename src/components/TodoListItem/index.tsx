import React, { FC } from 'react'
import { Col, Row } from 'react-bootstrap'

import styles from './styles'

interface Props {
  content: string
}

const TodoListItem: FC<Props> = ({ content }) => (
  <Row style={styles.todoItem}>
    <Col md={1} style={styles.listBullet}>
      ◦
    </Col>
    <Col md={11} style={styles.listContent}>
      {content}
    </Col>
  </Row>
)

export default TodoListItem
