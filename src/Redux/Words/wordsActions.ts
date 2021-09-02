import { IWordData } from '../../Axios/requests'
import { IGameResults } from '../../Classes/IGemeResults'
import { IActionCreator } from '../UserData/interfaces'

import {
  ISetWordsAction,
  IGetWordsAction,
  WordsActionsTypes,
  IChangeLevelAction,
  ISelectWordAction,
  ISetIsLoadingAction,
  ISetGameResultsAction,
  IStartGameAction,
  ISetUserWordAction,
} from './interfaces'

export const setWordsAction = (
  words: Array<Array<IWordData>>
): ISetWordsAction => ({
  type: WordsActionsTypes.SET_WORDS,
  payload: words,
})

export const getWordsAction = (): IGetWordsAction => ({
  type: WordsActionsTypes.GET_WORDS,
})

export const changeLevelAction = (level: number): IChangeLevelAction => ({
  type: WordsActionsTypes.CHANGE_LAVEL,
  payload: level,
})

export const selectWordAction = (
  word: IWordData | null
): ISelectWordAction => ({
  type: WordsActionsTypes.SELECT_WORD,
  payload: word,
})

export const setIsLoadingAction = (
  isLoading: boolean
): ISetIsLoadingAction => ({
  type: WordsActionsTypes.SET_IS_LOADING,
  payload: isLoading,
})

export const setGameResultsAction = (
  gameResults: IGameResults | null
): ISetGameResultsAction => ({
  type: WordsActionsTypes.SET_GAME_RESULTS,
  payload: gameResults,
})

export const startGameAction = (isStarted: boolean): IStartGameAction => ({
  type: WordsActionsTypes.START_GAME,
  payload: isStarted,
})

export const setUserWordAction: IActionCreator<string, ISetUserWordAction> = (
  word
) => ({
  type: WordsActionsTypes.SET_USER_WORD,
  payload: word,
})
