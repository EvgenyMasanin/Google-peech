import { userWatcher } from './UserSagas/UserSagas'
import { wordsSaga } from './WordsSagas/wordsSagas'
import { all, spawn } from 'redux-saga/effects'
import { statisticSaga } from './StatisticSagas/StatisticSagas'

export function* rootSaga() {
  const sagas = [wordsSaga, userWatcher, statisticSaga]
  yield all(sagas.map((saga) => spawn(saga)))
}
