import axios from 'axios'

const API_URL = 'https://afternoon-falls-25894.herokuapp.com/words'
//?page=2&group=0

const api = axios.create({
  baseURL: API_URL,
})

export default api
