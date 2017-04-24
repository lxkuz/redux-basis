// @flow
import type { ActionType } from 'flow/types'
import * as actions from 'actions/userActions'

export default function (state: ?{} = null, action: ActionType) {
  switch (action.type) {
    case actions.USER_LOGIN_SUCCESS:
      return action.user
    case actions.USER_FETCH_SUCCESS:
      return action.user
    case actions.USER_LOGIN_FAILURE:
      return { ...state, ...action.errors }
    case actions.USER_LOGOUT:
      return null
    default:
      return state
  }
}
