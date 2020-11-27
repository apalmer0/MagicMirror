import { API } from '../base'
import { ENDPOINTS } from '../endpoints'
import { Todo } from '../../../types'

const loadAll = async (): Promise<Todo[]> => {
  const { data } = await API.get(ENDPOINTS.todoItems)

  return data
}

export const todoItem = { loadAll }
