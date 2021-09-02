import {
  signinWatcher,
  logOutWatcher,
  signupWatcher,
} from './UserSagas/UserSagas'
import { wordsSaga } from './WordsSagas/wordsSagas'
import { all, spawn } from 'redux-saga/effects'
import { statisticSaga } from './StatisticSagas/StatisticSagas'

export function* rootSaga() {
  const sagas = [
    wordsSaga,
    signinWatcher,
    signupWatcher,
    logOutWatcher,
    statisticSaga,
  ]
  yield all(sagas.map((saga) => spawn(saga)))
}
