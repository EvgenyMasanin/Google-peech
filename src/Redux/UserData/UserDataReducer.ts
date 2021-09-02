import { IUser } from '../../Firebase/api'
import {
  IClearDataAction,
  IIsAuthAction,
  IIsLoadinAction,
  ISetErrorAction,
  ISetUserAction,
  UserDataActionTypes,
} from './interfaces'

const initialState = {
  error: '',
  user: {
    userName: ' ',
    email: '',
  } as IUser | null,
  isLoading: false,
  isAuth: false,
}

type UserDataState = typeof initialState

export type UserDataActions =
  | ISetUserAction
  | ISetErrorAction
  | IIsLoadinAction
  | IClearDataAction
  | IIsAuthAction

export const userDataReducer = (
  state = initialState,
  action: UserDataActions
): UserDataState => {
  switch (action.type) {
    case UserDataActionTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        isAuth: true,
        error: '',
      }
    case UserDataActionTypes.IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      }
    case UserDataActionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      }
    case UserDataActionTypes.IS_AUTH:
      return {
        ...state,
        isAuth: true,
      }
    case UserDataActionTypes.CLEAR_DATA:
      return { ...initialState, user: null }
    default:
      return state
  }
}
