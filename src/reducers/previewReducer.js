// @flow
import type { ActionType } from 'flow/types'
import * as actions from 'actions/previewActions'

export default function (state: ?{} = null, action: ActionType) {
  switch (action.type) {
    case actions.IMAGE_PREVIEW_LOADED:
      return state
    // case actions.IMAGE_PREVIEW_FAILED:
    //   return null
    // case '@@redux-form/DESTROY':
    //   return null
    default:
      return state
  }
}
