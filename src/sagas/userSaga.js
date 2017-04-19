// @flow
import { call, put, takeLatest } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import { AUTH_TOKEN_KEY } from 'constants/base'
import { browserHistory } from 'react-router'
import uuid from 'uuid'

import Api from 'src/api/Api'
import * as UserActions from 'actions/userActions'
import config from 'src/config'

export default function userSagaBuilder(dispatch: Function) {
  let subscription
  function *loginUser(action) {
    const { email, password } = action.user

    // try {
    //   const { user, authToken } = yield call(Api.user.login, email, password)
    //   if (user) {
    //     localStorage.setItem(AUTH_TOKEN_KEY, authToken)
    //     yield put(UserActions.loginSuccess(user))
    //     yield put(push('/'))
    //   }
    // } catch (errors) {
    //   const errorsByUniqKey = errors.map(v => (
    //     { [uuid.v1()]: v }
    //   ))
    //   yield put(UserActions.loginFailure({ errors: errorsByUniqKey, ...action.user }))
    // }
  }

  
  function logoutUser() {
    localStorage.removeItem(AUTH_TOKEN_KEY)
    browserHistory.push('login')
  }

  function *fetchUser(action) {
    // const { id } = action
    // try {
    //   const { data } = yield call(Api.user.get, { id })
    //   if (data) {
    //     yield put(UserActions.fetchUserSuccess(data))
    //   }
    // } catch (errors) {
    //   // TODO: should we really remove auth token and redirect when getting errors?
    //   localStorage.removeItem(AUTH_TOKEN_KEY)
    //   browserHistory.push('login')
    //   const errorsByUniqKey = errors.map(v => (
    //     { [uuid.v1()]: v }
    //   ))
    //   yield put(UserActions.loginFailure(errorsByUniqKey))
    // }
  }

  function *updateUser(action) {
    // try {
    //   const { data } = yield call(Api.user.update, action.user)
    //   if (data.errors) throw data.errors
    //   if (data) {
    //     yield put(UserActions.updateUserSuccess(data))
    //   }
    // } catch (errors) {
    //   yield put(UserActions.updateUserFailure(errors))
    // }
  }

  return function *userSaga(): Generator<*, *, *> {
    yield takeLatest(UserActions.USER_LOGIN_REQUEST, loginUser)
    yield takeLatest(UserActions.USER_LOGOUT, logoutUser)
    yield takeLatest(UserActions.USER_FETCH_REQUEST, fetchUser)
  }
}


