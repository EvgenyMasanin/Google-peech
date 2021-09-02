import { IGameResults } from '../../Classes/IGemeResults'

export enum StatisticActionTypes {
  SET_GAMES = 'SET_GAMES',
  IS_LOADING = 'IS_LOADING',
}

export interface ISetGamesAction {
  type: StatisticActionTypes.SET_GAMES
  payload: Array<IGameResults>
}

export interface IStatisticIsLoadingAction {
  type: StatisticActionTypes.IS_LOADING
  payload: boolean
}
