// @flow
import type { ActionType } from 'flow/types'
import * as exportActions from 'actions/exportActions'

export default function (state: ?{} = null, action: ActionType) {
  switch (action.type) {
    case exportActions.EXPORT_REPORT_REQUEST:
      return { ...state, report: true }
    case exportActions.EXPORT_REPORT_SUCCESS:
    case exportActions.EXPORT_REPORT_FAILURE:
      return { ...state, report: false }
    default:
      return state
  }
}
