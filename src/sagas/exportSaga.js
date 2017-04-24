// @flow
import { call, put, takeLatest } from 'redux-saga/effects'
import Api from 'src/api/Api'
import * as exportActions from 'actions/exportActions'

function *exportReport(action) {
  try {
    yield call(Api.export.report, action.id)
    yield put(exportActions.getReportSuccess(action.id))
  } catch (e) {
    yield put(exportActions.getReportFailure(action.id))
  }
}

function *userSaga(): Generator<*, *, *> {
  yield takeLatest(exportActions.EXPORT_REPORT_REQUEST, exportReport)
}

export default userSaga
