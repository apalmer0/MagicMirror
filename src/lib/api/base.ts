import axios, { AxiosResponse } from 'axios'

const apiUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://magic-mirror-api.herokuapp.com'
    : 'http://localhost:3000'

export const apiClient = axios.create({
  baseURL: apiUrl,
  headers: { 'Cache-Control': 'no-cache' },
  timeout: 10000,
})

const get = async (endpoint: string): Promise<AxiosResponse> =>
  apiClient.get(endpoint)

export const API = { get }
