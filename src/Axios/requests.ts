import api from './axios'
//?page=2&group=0

export interface IWordData {
  id: number
  word: string
  image: string
  audio: string
  transcription: string
  //   audioMeaning: string
  //   audioExample: string
  //   textMeaning: string
  //   textExample: string
}

const getWords = async (): Promise<Array<Array<IWordData>>> => {
  const pages = Array(6)
    .fill(0)
    .map(() => (Math.random() * 29).toFixed(0))

  try {
    const responce = [
      await api.get<IWordData>(`?page=${pages[0]}&group=0`),
      await api.get<IWordData>(`?page=${pages[1]}&group=1`),
      await api.get<IWordData>(`?page=${pages[2]}&group=2`),
      await api.get<IWordData>(`?page=${pages[3]}&group=3`),
      await api.get<IWordData>(`?page=${pages[4]}&group=4`),
      await api.get<IWordData>(`?page=${pages[5]}&group=5`),
    ]
    const wodrsGroups = responce.map((el: any) => {
      return el.data.slice(0, 10)
    })
    return wodrsGroups
  } catch (error) {
    throw error
  }
}

export default getWords
