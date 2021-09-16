import { paths } from '../../../Routes/Routes'
import { LocationChangeAction, LOCATION_CHANGE } from 'connected-react-router'
import { call, takeEvery, put } from 'redux-saga/effects'
import {
  setGamesAction,
  statisticSetIsLoading,
} from '../../Statistic/StatisticActions'
import firebaseService from '../../../Firebase/api'
import { GetGamesOnRouteEnterResult, SatisticSagaResult } from '../Types'

function* getGamesOnRouteEnter(
  action: LocationChangeAction
): GetGamesOnRouteEnterResult {
  try {
    if (action.payload.location.pathname === paths.STATISTIC) {
      yield put(statisticSetIsLoading(true))
      const games = yield call(firebaseService.getGames)
      yield put(setGamesAction(games))
    }
  } catch (e) {
    console.log(e)
  }
}

export function* statisticSaga(): SatisticSagaResult {
  yield takeEvery(LOCATION_CHANGE, getGamesOnRouteEnter)
}
