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
  userName: ' ',
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
        userName: action.payload,
        isLoading: false,
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
      return { ...initialState, userName: '' }
    default:
      return state
  }
}
