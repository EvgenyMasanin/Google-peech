import { PutEffect, CallEffect, ForkEffect } from 'redux-saga/effects'
import { IWordData } from '../../Axios/requests'
import { IGameResults } from '../../Classes/IGemeResults'
import { IUser } from '../../Firebase/api'
import {
  ISetGamesAction,
  IStatisticIsLoadingAction,
} from '../Statistic/interfaces'
import {
  IClearDataAction,
  IIsLoadinAction,
  ISetErrorAction,
  ISetUserAction,
} from '../UserData/interfaces'
import { ISetIsLoadingAction, ISetWordsAction } from '../Words/interfaces'

export type GetGamesOnRouteEnterResult = Generator<
  | PutEffect<IStatisticIsLoadingAction | ISetGamesAction>
  | CallEffect<IGameResults[]>,
  void,
  IGameResults[]
>

export type SatisticSagaResult = Generator<ForkEffect<never>, void>

export type AuthWorkerResult = Generator<
  | PutEffect<IIsLoadinAction | ISetUserAction | ISetErrorAction>
  | CallEffect<ISetUserAction | IUser>,
  void,
  IUser | null
>

export type LogOutWorkerResult = Generator<PutEffect<IClearDataAction>, void>

export type UserWatcherResult = Generator<ForkEffect<never>, void>

export type GetWordsWorkerResult = Generator<
  PutEffect<ISetIsLoadingAction | ISetWordsAction> | CallEffect<IWordData[][]>,
  void,
  IWordData[][]
>

export type GetWordsOnRouteEnterResults = Generator<
  PutEffect<ISetIsLoadingAction | ISetWordsAction> | CallEffect<IWordData[][]>,
  void,
  IWordData[][]
>

export type WordaSagaResult = Generator<ForkEffect<never>, void>
