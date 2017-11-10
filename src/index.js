import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import registerServiceWorker from './registerServiceWorker'

import './styles/index.css'

import App from './components/App'
import routes from './routes'
import store from './store'

render(
  <Provider store={store}>
    <App>
      {routes}
    </App>
  </Provider>
  , document.getElementById('root'))
registerServiceWorker()
