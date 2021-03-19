import axios from 'axios'

export const URL = 'http://localhost:8080/'

export const customFetch = axios.create({
  baseURL: URL,
  timeout: 1000,
})
