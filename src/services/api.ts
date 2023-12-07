import axios from 'axios'

export const api = axios.create({ baseURL: 'http://172.17.1.236:3000' })
