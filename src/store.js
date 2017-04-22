// @flow
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { browserHistory } from 'react-router'
import { routerMiddleware, push } from 'react-router-redux'
import jwtDecode from 'jwt-decode'

import reducer from 'src/reducers/reducers'
import rootSaga from 'src/sagas/rootSaga'
import { AUTH_TOKEN_KEY } from 'constants/base'
import { fetchUser } from 'actions/userActions'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware, routerMiddleware(browserHistory)]

if (process.env.NODE_ENV === 'development') {
  const createLogger = require('redux-logger')
  const logger = createLogger({ collapsed: true })
  middlewares.push(logger)
}

const initialStore: any = {}
const authToken: ?string = localStorage.getItem(AUTH_TOKEN_KEY) || null

let currentUserId = null
if (authToken != null) {
  currentUserId = jwtDecode(authToken) && jwtDecode(authToken).id
}

const store = createStore(reducer, initialStore, applyMiddleware(...middlewares))
sagaMiddleware.run(rootSaga, store.dispatch)

if (currentUserId) {
  store.dispatch(fetchUser(currentUserId))
} else {
  store.dispatch(push('/login'))
}

export default store
