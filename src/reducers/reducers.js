// @flow
import { combineReducers } from 'redux'
import reducerPipe from 'reducer-pipe'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import requestsReducer from './requestsReducer'
import requestsFormReducer from './requestsFormReducer'

import currentUserReducer from './currentUserReducer'
export default combineReducers({
  routing: routerReducer,
  form: reducerPipe([formReducer, requestsFormReducer]),
  currentUser: currentUserReducer,
  requests: requestsReducer
})
