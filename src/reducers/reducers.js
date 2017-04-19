// @flow
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

// import filterReducer from './filter/index'
// import currentUserReducer from './currentUserReducer'
// import previewReducer from './previewReducer'

export default combineReducers({
  routing: routerReducer,
  form: formReducer
  // currentUser: currentUserReducer,
  // requests: requestsReducer,
  // preview: previewReducer
})
