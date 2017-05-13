export function addTodo (todo) {
  return {
    type: 'ADD_TODO',
    payload: todo,
  }
}

export function deleteTodo (id) {
  return {
    type: 'DELETE_TODO',
    payload: id,
  }
}

export function selectFilter(filter) {
  return {
    type: 'SET_FILTER',
    payload: filter,
  }
}

export function toggleComplete(event, id) {
  return {
    type: 'TOGGLE_TODO',
    payload: {
      status: event.currentTarget.checked ? 'completed' : 'active',
      id,
    },
  }
}
