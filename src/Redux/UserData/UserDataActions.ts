import { IAuthFields } from '../../Components/AuthForm/AuthForm'
import { firebaseServiceMethods, IUser } from '../../Firebase/api'
import {
  IActionCreator,
  IClearDataAction,
  IIsAuthAction,
  IIsLoadinAction,
  ISigninAction,
  ISignOutAction,
  ISetErrorAction,
  ISetUserAction,
  ISignupAction,
  UserDataActionTypes,
} from './interfaces'

export const authSetIsLoadingAction: IActionCreator<boolean, IIsLoadinAction> =
  (isLoading) => ({
    type: UserDataActionTypes.IS_LOADING,
    payload: isLoading,
  })

export const authSetErrorAction: IActionCreator<string, ISetErrorAction> = (
  error
) => ({
  type: UserDataActionTypes.SET_ERROR,
  payload: error,
})

export const setUserAction: IActionCreator<IUser | null, ISetUserAction> = (
  user
) => ({
  type: UserDataActionTypes.SET_USER,
  payload: user,
})

export const signinAction: IActionCreator<IAuthFields, ISigninAction> = (
  authFields
) => ({
  type: UserDataActionTypes.SIGNIN,
  payload: { ...authFields, metod: firebaseServiceMethods.AUTHORIZE_USER },
})

export const signupAction: IActionCreator<IAuthFields, ISignupAction> = (
  authFields
) => ({
  type: UserDataActionTypes.SIGNUP,
  payload: { ...authFields, metod: firebaseServiceMethods.REGISTER_USER },
})

export const signOutAction = (): ISignOutAction => ({
  type: UserDataActionTypes.SIGN_OUT,
})

export const setIsAuthAction = (): IIsAuthAction => ({
  type: UserDataActionTypes.IS_AUTH,
})

export const claerDataAction = (): IClearDataAction => ({
  type: UserDataActionTypes.CLEAR_DATA,
})

export const clearError = (): ISetErrorAction => ({
  type: UserDataActionTypes.SET_ERROR,
  payload: '',
})
