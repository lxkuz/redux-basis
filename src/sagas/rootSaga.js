// @flow
import type { Dispatch } from 'redux' // eslint-disable-line import/named
import type { ActionType } from 'flow/types'
import userSagaBuilder from './userSaga'
import requestsSaga from './requestsSaga'
import exportSaga from './exportSaga'

export default function *rootSaga(dispatch: Dispatch<ActionType>): Generator<*, *, *> {
  const userSaga = userSagaBuilder(dispatch)
  yield [
    userSaga(),
    requestsSaga(),
    exportSaga()
  ]
}
