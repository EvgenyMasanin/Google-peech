import axios from 'axios'

const API_URL = 'https://afternoon-falls-25894.herokuapp.com/words'

export const FORK_URL =
  'https://raw.githubusercontent.com/EvgenyMasanin//rslang-data/master/'

const api = axios.create({
  baseURL: API_URL,
})

export default api
