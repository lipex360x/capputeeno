import axios from 'axios'
const API_URL = process.env.NEXT_PUBLIC_API_URL as string

export const client = axios.create({
  baseURL: API_URL,
})
