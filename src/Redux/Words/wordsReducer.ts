import { IWordData } from '../../Axios/requests'
import { IClearDataAction, UserDataActionTypes } from '../UserData/interfaces'
import {
  IChangeLevelAction,
  ISelectWordAction,
  ISetIsLoadingAction,
  ISetWordsAction,
  wordsActionsTypes,
} from './interfaces'

const initialState = {
  words: [] as Array<Array<IWordData>>,
  level: 0,
  isLoading: false,
  selectedWord: {} as IWordData,
}

type IWordsReducerAction =
  | ISetWordsAction
  | IChangeLevelAction
  | ISelectWordAction
  | ISetIsLoadingAction
  | IClearDataAction

export const wordsReducer = (
  state = initialState,
  action: IWordsReducerAction
) => {
  switch (action.type) {
    case wordsActionsTypes.SET_WORDS:
      return {
        ...state,
        words: action.payload,
        isLoading: false,
      }
    case wordsActionsTypes.CHANGE_LAVEL:
      return {
        ...state,
        level: action.payload,
      }
    case wordsActionsTypes.SELECT_WORD:
      return {
        ...state,
        selectedWord: action.payload,
      }
    case wordsActionsTypes.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      }
    case UserDataActionTypes.CLEAR_DATA:
      return initialState
    default:
      return state
  }
}
