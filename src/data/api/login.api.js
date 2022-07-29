import { createToast } from "../../components/toasts/toast.slice"
import store from "../../store"
import api from "./axios"


export const login = (email, password) => {
  return (dispatch) => {
    api.post('/login', { email, password})
    .then(response => {
      dispatch(createToast({
          content: 'Login feito com sucesso',
          timer: 5000,
          type: 'sucess'
        })
      )
      console.log(response)
  
    })
    .catch((erro) => {
      dispatch(createToast({
        content: 'Email ou senha incorretos',
        timer: 5000,
        type: 'error'
      })
    )
    })
  }
}