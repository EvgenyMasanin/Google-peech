import { IWordData } from '../Axios/requests'
import { IUser } from '../Firebase/api'

export interface IGameResults {
  id: string
  key: string
  score: number
  user: IUser
  countOfCorrect: number
  countOfUnCorrect: number
  correctWords: Array<IWordAfterGame>
  unCorrectWords: Array<IWordAfterGame>
  lv1: Array<IWordAfterGame>
  lv2: Array<IWordAfterGame>
  lv3: Array<IWordAfterGame>
  lv4: Array<IWordAfterGame>
  lv5: Array<IWordAfterGame>
  lv6: Array<IWordAfterGame>
  setWords: (levels: Array<Array<IWordAfterGame>>) => void
  dateOfGame: string
  [Symbol.iterator](): Generator<Array<IWordAfterGame>, void, undefined>
}

export type wordGroups = 'lv1' | 'lv2' | 'lv5' | 'lv4' | 'lv5' | 'lv6'

export interface IWordAfterGame extends IWordData {
  isCorrect: boolean
}
