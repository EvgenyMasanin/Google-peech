import { IWordData } from '../../Axios/requests'

import {
  ISetWordsAction,
  IGetWordsAction,
  wordsActionsTypes,
  IChangeLevelAction,
  ISelectWordAction,
  ISetIsLoadingAction,
} from './interfaces'

export const setWordsAction = (
  words: Array<Array<IWordData>>
): ISetWordsAction => ({
  type: wordsActionsTypes.SET_WORDS,
  payload: words,
})

export const getWordsAction = (): IGetWordsAction => ({
  type: wordsActionsTypes.GET_WORDS,
})

export const changeLevelAction = (level: number): IChangeLevelAction => ({
  type: wordsActionsTypes.CHANGE_LAVEL,
  payload: level,
})

export const selectWordAction = (word: IWordData): ISelectWordAction => ({
  type: wordsActionsTypes.SELECT_WORD,
  payload: word,
})

export const setIsLoadingAction = (
  isLoading: boolean
): ISetIsLoadingAction => ({
  type: wordsActionsTypes.SET_IS_LOADING,
  payload: isLoading,
})
