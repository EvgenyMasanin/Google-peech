import { IGameResults } from '../../Classes/IGemeResults'
import { IActionCreator } from '../UserData/interfaces'
import {
  ISetGamesAction,
  IStatisticIsLoadingAction,
  StatisticActionTypes,
} from './interfaces'

export const setGamesAction: IActionCreator<
  Array<IGameResults>,
  ISetGamesAction
> = (games) => ({
  type: StatisticActionTypes.SET_GAMES,
  payload: games,
})

export const statisticSetIsLoading: IActionCreator<
  boolean,
  IStatisticIsLoadingAction
> = (isLoading) => ({
  type: StatisticActionTypes.IS_LOADING,
  payload: isLoading,
})
