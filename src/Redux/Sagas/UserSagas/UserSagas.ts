import firebaseService from '../../../Firebase/api'
import { call, put, takeEvery } from 'redux-saga/effects'
import {
  authSetErrorAction,
  authSetIsLoadingAction,
  claerDataAction,
  setUserAction,
} from '../../UserData/UserDataActions'
import {
  ISigninAction,
  ISignupAction,
  UserDataActionTypes,
} from '../../UserData/interfaces'
import {
  AuthWorkerResult,
  LogOutWorkerResult,
  UserWatcherResult,
} from '../Types'

function* authWorker(action: ISigninAction | ISignupAction): AuthWorkerResult {
  try {
    yield put(authSetIsLoadingAction(true))
    const user = yield call(() =>
      firebaseService[action.payload.metod](
        action.payload.email,
        action.payload.password
      )
    )
    yield put(setUserAction(user))
  } catch (error: any) {
    yield put(authSetErrorAction(error.message))
  }
}

function* logOutWorker(): LogOutWorkerResult {
  firebaseService.signOut()
  yield put(claerDataAction())
}

export function* userWatcher(): UserWatcherResult {
  yield takeEvery(UserDataActionTypes.SIGNIN, authWorker)
  yield takeEvery(UserDataActionTypes.SIGNUP, authWorker)
  yield takeEvery(UserDataActionTypes.SIGN_OUT, logOutWorker)
}
