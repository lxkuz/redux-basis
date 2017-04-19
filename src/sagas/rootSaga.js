// @flow
import type { Dispatch } from 'redux' // eslint-disable-line import/named
import type { ActionType } from 'flow/types'
import Api from 'src/api/Api'
import userSagaBuilder from './userSaga'

export default function *rootSaga(dispatch: Dispatch<ActionType>): Generator<*, *, *> {
  const userSaga = userSagaBuilder(dispatch)
  yield [
    userSaga()
  ]
}
