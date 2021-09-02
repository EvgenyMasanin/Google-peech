import { paths } from '../../../Routes/Routes'
import { LOCATION_CHANGE } from 'connected-react-router'
import { call, fork, put, take } from 'redux-saga/effects'
import {
  setGamesAction,
  statisticSetIsLoading,
} from '../../Statistic/StatisticActions'
import firebaseService from '../../../Firebase/api'

function* getGamesOnRouteEnter(): any {
  while (true) {
    const action = yield take(LOCATION_CHANGE)
    if (action.payload.location.pathname === paths.STATISTIC) {
      yield put(statisticSetIsLoading(true))
      const games = yield call(firebaseService.getGames)
      yield put(setGamesAction(games))
    }
  }
}

export function* statisticSaga() {
  yield fork(getGamesOnRouteEnter)
}
