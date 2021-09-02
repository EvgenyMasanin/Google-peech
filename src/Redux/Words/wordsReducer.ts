import { IWordData } from '../../Axios/requests'
import { IGameResults } from '../../Classes/IGemeResults'
import { IClearDataAction, UserDataActionTypes } from '../UserData/interfaces'
import {
  IChangeLevelAction,
  ISelectWordAction,
  ISetGameResultsAction,
  ISetIsLoadingAction,
  ISetUserWordAction,
  ISetWordsAction,
  IStartGameAction,
  WordsActionsTypes,
} from './interfaces'

const initialState = {
  words: [] as Array<Array<IWordData>>,
  level: 0,
  isLoading: false,
  selectedWord: null as IWordData | null,
  gameStarted: false,
  gameResults: null as IGameResults | null,
  userWord: '',
}

type IWordsReducerAction =
  | ISetWordsAction
  | IClearDataAction
  | IStartGameAction
  | ISelectWordAction
  | IChangeLevelAction
  | ISetUserWordAction
  | ISetIsLoadingAction
  | ISetGameResultsAction

export const wordsReducer = (
  state = initialState,
  action: IWordsReducerAction
) => {
  switch (action.type) {
    case WordsActionsTypes.SET_WORDS:
      return {
        ...state,
        words: action.payload,
        isLoading: false,
      }
    case WordsActionsTypes.CHANGE_LAVEL:
      return {
        ...state,
        level: action.payload,
      }
    case WordsActionsTypes.SELECT_WORD:
      return {
        ...state,
        selectedWord: action.payload,
      }
    case WordsActionsTypes.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      }
    case WordsActionsTypes.SET_GAME_RESULTS:
      return {
        ...state,
        gameResults: action.payload,
      }
    case WordsActionsTypes.START_GAME:
      return {
        ...state,
        gameStarted: action.payload,
      }
    case WordsActionsTypes.SET_USER_WORD:
      return {
        ...state,
        userWord: action.payload,
      }
    case UserDataActionTypes.CLEAR_DATA:
      return initialState
    default:
      return state
  }
}
