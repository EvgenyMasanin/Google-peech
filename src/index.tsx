import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { history, store } from './Redux/store'
import { ConnectedRouter } from 'connected-react-router'

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
