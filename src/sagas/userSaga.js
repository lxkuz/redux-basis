// @flow
import { call, put, takeLatest } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import { AUTH_TOKEN_KEY } from 'constants/base'
import { browserHistory } from 'react-router'
import uuid from 'uuid'

import Api from 'src/api/Api'
import * as UserActions from 'actions/userActions'

export default function userSagaBuilder() {
  function *loginUser(action) {
    const { email, password } = action
    try {
      const { user, authToken } = yield call(Api.user.login, email, password)
      if (user) {
        localStorage.setItem(AUTH_TOKEN_KEY, authToken)
        yield put(UserActions.loginSuccess(user))
        yield put(push('/'))
      }
    } catch (errors) {
      const errorsByUniqKey = errors.map(v => (
        { [uuid.v1()]: v }
      ))
      yield put(UserActions.loginFailure({ errors: errorsByUniqKey, ...action }))
    }
  }

  function logoutUser() {
    localStorage.removeItem(AUTH_TOKEN_KEY)
    browserHistory.push('/login')
  }

  function *fetchUser(action) {
    const { id } = action
    try {
      const { data, response } = yield call(Api.users.get, { id })
      if (response.status == 200 && data) {
        yield put(UserActions.fetchUserSuccess(data))
      }
    } catch (errors) {
      localStorage.removeItem(AUTH_TOKEN_KEY)
      browserHistory.push('/login')
      const errorsByUniqKey = errors.map(v => (
        { [uuid.v1()]: v }
      ))
      yield put(UserActions.loginFailure(errorsByUniqKey))
    }
  }
  return function *userSaga(): Generator<*, *, *> {
    yield takeLatest(UserActions.USER_LOGIN_REQUEST, loginUser)
    yield takeLatest(UserActions.USER_LOGOUT, logoutUser)
    yield takeLatest(UserActions.USER_FETCH_REQUEST, fetchUser)
  }
}


