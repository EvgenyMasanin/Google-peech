import { IGameResults } from '../../Classes/IGemeResults'
import {
  ISetGamesAction,
  IStatisticIsLoadingAction,
  StatisticActionTypes,
} from './interfaces'

const initialState = {
  isLoading: false,
  games: [] as Array<IGameResults>,
}

type UserDataState = typeof initialState

type StatisticReducerActions = IStatisticIsLoadingAction | ISetGamesAction

export const statisticReducer = (
  state = initialState,
  action: StatisticReducerActions
): UserDataState => {
  switch (action.type) {
    case StatisticActionTypes.IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      }
    case StatisticActionTypes.SET_GAMES:
      return {
        ...state,
        games: action.payload,
        isLoading: false,
      }
    default:
      return state
  }
}
