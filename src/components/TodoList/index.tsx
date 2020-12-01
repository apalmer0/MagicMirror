import React, { FC, useCallback, useEffect, useState } from 'react'

import { API } from '../../lib/api'
import { Todo } from '../../types'
import friday from './friday.gif'
import styles from './styles'
import TodoListItem from '../TodoListItem'

const FRIDAY = 5

const TodoList: FC = () => {
  const [list, setList] = useState<Todo[]>([])

  useEffect(() => {
    const getTodoItems = async () => {
      try {
        const data = await API.todoItem.loadAll()

        setList(data)
      } catch (e) {
        console.error(e)
      }
    }

    getTodoItems()
    const interval = setInterval(getTodoItems, 5000)
    return () => clearInterval(interval)
  }, [])

  const today = new Date()

  const renderNoTasks = useCallback(() => {
    const noTasksFriday = (
      <img height="260" src={friday} title="Friday" width="480" />
    )
    const noTasks = <div>no items found</div>

    return today.getDay() === FRIDAY ? noTasksFriday : noTasks
  }, [today])

  return (
    <div style={styles.todoStyles}>
      <h1>To do today:</h1>
      {list.length
        ? list.map((task) => (
            <TodoListItem key={task.id} content={task.content} due={task.due} />
          ))
        : renderNoTasks()}
    </div>
  )
}

export default TodoList
