const addTodo = (state = 'all', action) => {
  if ( action.type === 'SET_FILTER') {
    return action.payload
  }

  return state
}

export default addTodo
