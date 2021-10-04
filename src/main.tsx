import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Home from './Home'
import store from './store/index'

ReactDOM.render(
  <Provider store = {store}>
    <React.StrictMode>
      <Home />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)
