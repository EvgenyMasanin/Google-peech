import getWords from '../../../Axios/requests'
import { paths } from '../../../Routes/Routes'
import { LocationChangeAction, LOCATION_CHANGE } from 'connected-react-router'
import { WordsActionsTypes } from '../../Words/interfaces'
import { call, put, takeEvery } from 'redux-saga/effects'
import { setIsLoadingAction, setWordsAction } from '../../Words/wordsActions'
import {
  GetWordsOnRouteEnterResults,
  GetWordsWorkerResult,
  WordaSagaResult,
} from '../Types'

function* getWordsWorker(): GetWordsWorkerResult {
  yield put(setIsLoadingAction(true))
  const words = yield call(getWords)
  yield put(setWordsAction(words))
}

export function* getWordsOnRouteEnter(
  action: LocationChangeAction
): GetWordsOnRouteEnterResults {
  if (action.payload.location.pathname === paths.MAIN) {
    yield put(setIsLoadingAction(true))
    const words = yield call(getWords)
    yield put(setWordsAction(words))
  }
}

export function* wordsSaga(): WordaSagaResult {
  yield takeEvery(WordsActionsTypes.GET_WORDS, getWordsWorker)
  yield takeEvery(LOCATION_CHANGE, getWordsOnRouteEnter)
}
