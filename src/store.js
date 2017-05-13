import { createStore } from 'redux'
import reducers from './reducers'

const store = createStore(reducers, {
  todos: [],
  filter: 'all',
})

export default store
