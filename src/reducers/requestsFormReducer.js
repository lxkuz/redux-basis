// @flow
import type { ActionType } from 'flow/types'
import * as actions from 'actions/requestsActions'
import R from 'ramda'

export default function (state: ?{} = null, action: ActionType) {
  switch (action.type) {
    case actions.GET_SUCCESS: {
      const { data, form } = action.payload
      return R.assocPath([form, 'values'], data)(state)
    }
    default:
      return state
  }
}
