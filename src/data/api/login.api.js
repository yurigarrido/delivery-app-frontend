import api from "./axios"


export const login = async (email, password) => {
  try {
    const response = await api.post('/login', { email, password})
    return response.data
  } catch (error) {
    console.error(error)
    return false
  }
}