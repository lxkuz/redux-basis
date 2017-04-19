import 'normalize.css'
import 'react-select/dist/react-select.css'
import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'

import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
require('./assets/css/main.styl')
require('./assets/css/fonts.styl')

import store from 'src/store'
import routes from './routes'

const history = syncHistoryWithStore(browserHistory, store)

Error.stackTraceLimit = 30

const rootDiv = document.getElementById('root')

function renderApp(appRoutes) {
  render(
    <Provider store={store}>
      <AppContainer>
        <div>
          <Router history={history} routes={appRoutes}/>
        </div>
      </AppContainer>
    </Provider>,
    rootDiv
  )
}

renderApp(routes)

if (module.hot) {
  module.hot.accept('./routes', () => {
    const newRoutes = require('./routes')
    renderApp(newRoutes)
  })
}
