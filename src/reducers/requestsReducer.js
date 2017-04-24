// @flow
import type { ActionType } from 'flow/types'
import * as actions from 'actions/requestsActions'
import R from 'ramda'

export default function (state: ?{} = null, action: ActionType) {
  const data = action.payload && action.payload.data
  const stateWithoutErrors = R.assocPath(['errors'], null)(state)
  switch (action.type) {
    case actions.DESTROY_SUCCESS: {
      const { id, resource } = action.payload
      const objects = R.pathOr([], [resource], state)
      const results = R.filter((obj) => {
        return !R.propEq('id', id)(obj) //TODO find Ramda func
      }, objects)
      return R.assocPath([resource], results)(state)
    }
    case actions.INDEX_SUCCESS:
      return R.assocPath([action.payload.resource], data)(state)
    case actions.REQUEST_FAILURE:
      return R.assocPath([action.payload.resource], [])(state)
    case actions.FORM_REQUEST_FAILURE:
      return R.assocPath(['errors'], data)(state)
    // case actions.REQUEST_SUCCESS:
    //   return R.assocPath(['errors'], null)(state)
    case actions.GET_REQUEST:
      return R.assocPath(['errors'], null)(state)
    case actions.GET_SUCCESS:
      return R.assocPath(['showObject'], data)(stateWithoutErrors)
    default:
      return state
  }
}
