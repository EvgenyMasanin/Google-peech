import { IWordData } from '../Axios/requests'

export type NEXT_LEVEL_TYPE = 'NEXT_LEVEL'
export const NEXT_LEVEL = 'NEXT_LEVEL'

const wordGenerator = function* (words: Array<Array<IWordData>>) {
  for (const level of words) {
    for (const word of level) {
      yield word
    }
    yield NEXT_LEVEL
  }
}

export default wordGenerator
