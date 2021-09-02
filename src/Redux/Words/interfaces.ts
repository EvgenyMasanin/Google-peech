import { IWordData } from '../../Axios/requests'
import { IGameResults } from '../../Classes/IGemeResults'

export enum WordsActionsTypes {
  GET_WORDS = 'GET_WORDS',
  SET_WORDS = 'SET_WORDS',
  START_GAME = 'START_GAME',
  SELECT_WORD = 'SELECT_WORD',
  CHANGE_LAVEL = 'CHANGE_LAVEL',
  SET_USER_WORD = 'SET_USER_WORD',
  SET_IS_LOADING = 'SET_IS_LOADING',
  SET_GAME_RESULTS = 'SET_GAME_RESULTS',
}

export interface ISetWordsAction {
  type: WordsActionsTypes.SET_WORDS
  payload: Array<Array<IWordData>>
}

export interface IGetWordsAction {
  type: WordsActionsTypes.GET_WORDS
}

export interface IChangeLevelAction {
  type: WordsActionsTypes.CHANGE_LAVEL
  payload: number
}

export interface ISelectWordAction {
  type: WordsActionsTypes.SELECT_WORD
  payload: IWordData | null
}

export interface ISetIsLoadingAction {
  type: WordsActionsTypes.SET_IS_LOADING
  payload: boolean
}

export interface ISetGameResultsAction {
  type: WordsActionsTypes.SET_GAME_RESULTS
  payload: IGameResults | null
}

export interface IStartGameAction {
  type: WordsActionsTypes.START_GAME
  payload: boolean
}

export interface ISetUserWordAction {
  type: WordsActionsTypes.SET_USER_WORD
  payload: string
}
