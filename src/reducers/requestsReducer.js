// @flow
import type { ActionType } from 'flow/types'
import * as actions from 'actions/requestsActions'
import R from 'ramda'

export default function (state: ?{} = null, action: ActionType) {
  switch (action.type) {
    case actions.DESTROY_SUCCESS:
      const { id, resource } = action.payload
      const objects = R.pathOr([], [resource], state)
      const results = R.filter((obj) => {
        return !R.propEq('id', id)(obj) //TODO find Ramda func
      }, objects)
      return R.assocPath([resource], results)(state)
    case actions.INDEX_SUCCESS:
      console.log(action.payload)
      const { data } = action.payload
      return R.assocPath([action.payload.resource], data)(state)
    default:
      return state
  }
}
