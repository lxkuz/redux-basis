// @flow
import { put, takeLatest, call } from 'redux-saga/effects'
// import { call, put, takeLatest } from 'redux-saga/effects'
import R from 'ramda'
import { push } from 'react-router-redux'
import Api from 'src/api/Api'

import * as requestsActions from 'actions/requestsActions'

function *destroyItem(action) {
  const { resource, id } = action.payload
  try {
    const res = yield call(Api[resource].destroy, { id })
    if (res.response.status == 200) {
      yield put(requestsActions.destroySuccess(resource, id))
    } else {
      const error = { errors: res.response.statusText, status: res.response.status }
      yield put(requestsActions.requestFailure(resource, error))
    }
  } catch (e) {
    yield put(requestsActions.requestFailure(resource, e))
  }
}

function *createItem(action) {
  const { data, resource } = action.payload
  try {
    const res = yield call(Api[resource].create, data)
    if (res.response.status == 200) {
      yield put(requestsActions.createSuccess(resource, res))
      yield put(push(`/${resource}`))
    } else {
      const error = res.data && res.data.errors || { error: [res] }
      throw(error)
    }
  } catch (e) {
    yield put(requestsActions.formRequestFailure(resource, e))
  }
}

function *updateItem(action) {
  const { data, resource } = action.payload
  try {
    const res = yield call(Api[resource].update, data)
    yield put(requestsActions.updateSuccess(resource, res))
    yield put(push(`/${resource}`))
  } catch (e) {
    yield put(requestsActions.requestFailure(resource, e))
  }
}

function *getItem(action) {
  const { params, resource } = action.payload
  const { form } = params
  try {
    const res = yield call(Api[resource].get, R.omit(['form'], params))
    yield put(requestsActions.getSuccess(resource, res.data, form))
  } catch (e) {
    yield put(requestsActions.requestFailure(resource, e))
  }
}

function *indexItems(action) {
  const { payload: { resource, params } } = action
  try {
    const response = yield call(Api[resource].index, params)
    yield put(requestsActions.indexSuccess(resource, response.data))
  } catch (e) {
    yield put(requestsActions.requestFailure(resource, e))
  }
}

function *requestsSaga(): Generator<*, *, *> {
  yield takeLatest(requestsActions.DESTROY_REQUEST, destroyItem)
  yield takeLatest(requestsActions.INDEX_REQUEST, indexItems)
  yield takeLatest(requestsActions.CREATE_REQUEST, createItem)
  yield takeLatest(requestsActions.UPDATE_REQUEST, updateItem)
  yield takeLatest(requestsActions.GET_REQUEST, getItem)
}

export default requestsSaga
