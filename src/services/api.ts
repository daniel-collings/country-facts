import axios from 'axios'

const api = axios.create({
  baseURL: 'https://restcountries.com',
  timeout: 3000,
  method: 'GET',
  maxRedirects: 2,
  validateStatus: (status) => status >= 200 && status < 300
})

export default api
