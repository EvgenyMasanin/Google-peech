import { IAuthFields } from '../../Components/AuthForm/AuthForm'
import { firebaseServiceMethods } from '../../Firebase/api'

export enum UserDataActionTypes {
  SIGNIN = 'SIGNIN',
  SIGNUP = 'SIGNUP',
  IS_AUTH = 'IS_AUTH',
  SIGN_OUT = 'SIGN_OUT',
  SET_USER = 'SET_USER',
  SET_ERROR = 'SET_ERROR',
  IS_LOADING = 'IS_LOADING',
  CLEAR_DATA = 'CLEAR_DATA',
}

export interface ISetUserAction {
  type: UserDataActionTypes.SET_USER
  payload: string
}

interface IAuthPayload<T> extends IAuthFields {
  metod: T
}

export interface ISigninAction {
  type: UserDataActionTypes.SIGNIN
  payload: IAuthPayload<firebaseServiceMethods.AUTHORIZE_USER>
}

export interface ISignupAction {
  type: UserDataActionTypes.SIGNUP
  payload: IAuthPayload<firebaseServiceMethods.REGISTER_USER>
}

export interface IIsLoadinAction {
  type: UserDataActionTypes.IS_LOADING
  payload: boolean
}

export interface ISetErrorAction {
  type: UserDataActionTypes.SET_ERROR
  payload: string
}

export interface ISignOutAction {
  type: UserDataActionTypes.SIGN_OUT
}

export interface IClearDataAction {
  type: UserDataActionTypes.CLEAR_DATA
}

export interface IIsAuthAction {
  type: UserDataActionTypes.IS_AUTH
}

export interface IActionCreator<T, R> {
  (param: T): R
}
