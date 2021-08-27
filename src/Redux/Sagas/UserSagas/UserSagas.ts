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

function* signinWorker(action: ISigninAction | ISignupAction): any {
  try {
    yield put(authSetIsLoadingAction(true))
    const user = yield call(() =>
      firebaseService[action.payload.metod](
        action.payload.email,
        action.payload.password
      )
    )
    yield put(setUserAction(user))
  } catch (error) {
    console.log(error)
    yield put(authSetErrorAction(error.message))
  }
}

function* logOutWorker(): any {
  yield call(() => firebaseService.signOut())
  yield put(claerDataAction())
}

export function* signinWatcher() {
  yield takeEvery(UserDataActionTypes.SIGNIN, signinWorker)
}

export function* signupWatcher() {
  yield takeEvery(UserDataActionTypes.SIGNUP, signinWorker)
}

export function* logOutWatcher() {
  yield takeEvery(UserDataActionTypes.SIGN_OUT, logOutWorker)
}
