import { IWordData } from '../../Axios/requests'

export enum wordsActionsTypes {
  GET_WORDS = 'GET_WORDS',
  SET_WORDS = 'SET_WORDS',
  SELECT_WORD = 'SELECT_WORD',
  CHANGE_LAVEL = 'CHANGE_LAVEL',
  SET_IS_LOADING = 'SET_IS_LOADING',
}

export interface ISetWordsAction {
  type: wordsActionsTypes.SET_WORDS
  payload: Array<Array<IWordData>>
}

export interface IGetWordsAction {
  type: wordsActionsTypes.GET_WORDS
}

export interface IChangeLevelAction {
  type: wordsActionsTypes.CHANGE_LAVEL
  payload: number
}

export interface ISelectWordAction {
  type: wordsActionsTypes.SELECT_WORD
  payload: IWordData
}

export interface ISetIsLoadingAction {
  type: wordsActionsTypes.SET_IS_LOADING
  payload: boolean
}
