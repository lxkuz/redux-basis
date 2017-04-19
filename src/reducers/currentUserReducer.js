// @flow
import type { ActionType } from 'flow/types'
import * as actions from 'actions/userActions'

export default function (state: ?{} = null, action: ActionType) {
  switch (action.type) {
    case actions.USER_SIGNUP_SUCCESS:
    //   return { ...action.user, unconfirmed: true }
    // case actions.USER_SIGNUP_FAILURE:
    //   return { ...action.errors }
    // case actions.USER_CONFIRMATION_SUCCESS:
    //   return { confirmed: true }
    // case actions.USER_LOGIN_SUCCESS:
    // case actions.USER_FETCH_SUCCESS:
    // case actions.USER_UPDATE_SUCCESS:
    //   return action.user
    // case actions.USER_CONFIRMATION_FAILURE:
    // case actions.USER_LOGIN_FAILURE:
    //   return { ...state, ...action.errors }
    // case actions.USER_FETCH_FAILURE:
    // case actions.USER_UPDATE_FAILURE:
    //   return { ...state, errors: action.errors }
    // case actions.USER_LOGOUT:
    //   return null
    default:
      return state
  }
}
