// @flow
export const ACT_COMPLETION_REQUEST = 'ACT_COMPLETION_REQUEST'
export const ACT_COMPLETION_SUCCESS = 'ACT_COMPLETION_SUCCESS'
export const ACT_COMPLETION_FAILURE = 'ACT_COMPLETION_FAILURE'

export const completeAction = (act: Object) => ({
  type: ACT_COMPLETION_REQUEST,
  payload: act
})

export const actCompletionSuccess = (act: Object) => ({
  type: ACT_COMPLETION_SUCCESS,
  payload: act
})

export const actCompletionFailure = (error: string, act: Object) => ({
  type: ACT_COMPLETION_FAILURE,
  payload: act,
  error
})
