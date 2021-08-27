import {
  signinWatcher,
  logOutWatcher,
  signupWatcher,
} from './UserSagas/UserSagas'
import { wordsSaga } from './WordsSagas/wordsSagas'
import { all, spawn } from 'redux-saga/effects'

export function* rootSaga() {
  const sagas = [wordsSaga, signinWatcher, signupWatcher, logOutWatcher]
  yield all(sagas.map((saga) => spawn(saga)))
}
