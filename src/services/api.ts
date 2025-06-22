import axios from 'axios'
import Config from 'react-native-config'

export const apiClient = axios.create({
  baseURL: Config.API_URL,
})

apiClient.interceptors.request.use(async config => {
  // ! TODO: Add token to request headers
  const user = { token: '123' }
  if (user) {
    const { token } = user
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})
