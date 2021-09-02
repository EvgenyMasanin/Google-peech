import { IUser } from '../Firebase/api'
import { IGameResults, IWordAfterGame, wordGroups } from './IGemeResults'

interface GameResultsConstructor {
  id?: string
  user: IUser
  levels: Array<Array<IWordAfterGame>>
  dateOfGame?: string
}

class GameResults implements IGameResults {
  id: string
  user: IUser

  constructor({
    id = '',
    levels,
    user,
    dateOfGame = new Date().toDateString(),
  }: GameResultsConstructor) {
    this.id = id
    this.user = user
    this.lv1 = levels[0]
    this.lv2 = levels[1]
    this.lv3 = levels[2]
    this.lv4 = levels[3]
    this.lv5 = levels[4]
    this.lv6 = levels[5]
    this.dateOfGame = dateOfGame
  }

  countWords(isCorrect: boolean) {
    return [...this].reduce((totalCount, words) => {
      totalCount += words.reduce((count, word) => {
        if (word.isCorrect === isCorrect) count++
        return count
      }, 0)
      return totalCount
    }, 0)
  }

  words(isCorrect: boolean) {
    return [...this].reduce((filtered, words) => {
      filtered = [
        ...filtered,
        ...words.filter((word) => word.isCorrect === isCorrect),
      ]
      return filtered
    }, [])
  }
  get key() {
    return this.id
  }

  get countOfCorrect() {
    return this.countWords(true)
  }
  get countOfUnCorrect() {
    return this.countWords(false)
  }
  get correctWords() {
    return this.words(true)
  }

  get unCorrectWords() {
    return this.words(false)
  }

  get score() {
    let multiplier = 1
    let score = 0
    for (const words of this) {
      words.forEach((word) => {
        if (word.isCorrect) score += multiplier
      })
      multiplier += 0.1
    }
    return Math.floor(score)
  }

  setWords(levels: Array<Array<IWordAfterGame>>) {
    this.lv1 = levels[0]
    this.lv2 = levels[1]
    this.lv3 = levels[2]
    this.lv4 = levels[3]
    this.lv5 = levels[4]
    this.lv6 = levels[5]
  }

  lv1: Array<IWordAfterGame>
  lv2: Array<IWordAfterGame>
  lv3: Array<IWordAfterGame>
  lv4: Array<IWordAfterGame>
  lv5: Array<IWordAfterGame>
  lv6: Array<IWordAfterGame>
  dateOfGame: string;
  *[Symbol.iterator]() {
    for (const key in this) {
      if (key.startsWith('lv')) {
        yield this[key as wordGroups]
      }
    }
  }
}
export default GameResults
