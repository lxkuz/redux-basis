// @flow
import { put, takeLatest } from 'redux-saga/effects'
// import { call, put, takeLatest } from 'redux-saga/effects'
import { push } from 'react-router-redux'

// import Api from 'src/api/Api'

import * as actCardActions from 'actions/actCardActions'

function *createAct(action) {
  const { payload: { act } } = action

  try {
    // const user = yield call(Api.user.login, email, password)
    yield put(actCardActions.actCompletionSuccess(act))
    yield put(push('/'))
  } catch (e) {
    yield put(actCardActions.actCompletionFailure('error', {}))
  }
}

function *userSaga(): Generator<*, *, *> {
  yield takeLatest(actCardActions.ACT_COMPLETION_REQUEST, createAct)
}

export default userSaga
