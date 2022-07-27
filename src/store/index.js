import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../modules/login/login.slice';
import registerReducer from '../modules/register/register.slice';

export default configureStore({
  reducer: {
    login: loginReducer,
    register: registerReducer
  },
});
