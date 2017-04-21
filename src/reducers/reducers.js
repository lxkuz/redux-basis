// @flow
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import requestsReducer from './requestsReducer'
import currentUserReducer from './currentUserReducer'
export default combineReducers({
  routing: routerReducer,
  form: formReducer,
  currentUser: currentUserReducer,
  requests: requestsReducer
})
