import getWords from '../../../Axios/requests'
import { paths } from '../../../Routes/Routes'
import { LOCATION_CHANGE } from 'connected-react-router'
import { wordsActionsTypes } from '../../Words/interfaces'
import { call, fork, put, take, takeEvery } from 'redux-saga/effects'
import { setIsLoadingAction, setWordsAction } from '../../Words/wordsActions'

function* getWordsWorker(): any {
  yield put(setIsLoadingAction(true))
  const words = yield call(getWords)
  yield put(setWordsAction(words))
}

export function* getWordsOnRouteEnter(): any {
  while (true) {
    const action = yield take(LOCATION_CHANGE)
    if (action.payload.location.pathname === paths.MAIN) {
      yield put(setIsLoadingAction(true))
      const words = yield call(getWords)
      yield put(setWordsAction(words))
    }
  }
}

export function* wordsSaga() {
  yield fork(getWordsOnRouteEnter)
  yield takeEvery(wordsActionsTypes.GET_WORDS, getWordsWorker)
}
