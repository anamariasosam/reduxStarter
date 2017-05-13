import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'tachyons/css/tachyons.min.css'

import store from './store'
import App from './App'
import './index.css'

store.subscribe(() => {
  const state = store.getState()

  console.log('%cstate', 'background: deeppink', state)
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
)
