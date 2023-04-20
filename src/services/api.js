import { toast } from 'react-toastify'
import axios from 'axios'

export const createAPI = ({ baseURL, extraHeaders }) => {
  const api = axios.create({ baseURL })

  api.interceptors.request.use((config) => {
    config.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...extraHeaders
    }

    return config
  })

  api.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      toast.error(error.message)
      return Promise.reject(error)
    }
  )

  return api
}
