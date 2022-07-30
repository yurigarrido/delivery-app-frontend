import React, { useContext, useState} from 'react';
import Input from '../../components/Input';
import './login.css';
import maca from '../../images/maca.png';
import google from '../../images/google.png';
import facebook from '../../images/facebook.png';
import { login } from '../../data/api/login.api';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { Navigate } from "react-router-dom";

const Login = () => {
  const {auth, setAuth, setUser} = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleOnClick = async () => {
    const isLogged = await login(email, password)
    console.log(isLogged)
    if (isLogged.token) {
      setAuth(true)
      setUser(isLogged)
    }
    if (!isLogged) { 
      setAuth(false)
      createToast({
        content: 'Login feito com sucesso',
        timer: 5000,
        type: 'sucess'
      })
    }
  }


  return (
    <div className="container">
      { auth && <Navigate to='/home' />}
      <div className="image-login-box" />
      <div className="login-box">
        <div className="login-box-content">
          <section className="text-wellcome">
            <p>Seja Bem vindo(a)!</p>
          </section>
          <Input
            label="Email"
            type="text"
            value={email}
            name="email"
            title="Email"
            cy="input_email_login"
            action={ (e) => setEmail(e.value) }
            className="input-login"
          />
          <Input
            label="Senha"
            type="password"
            value={password}
            name="password"
            title="Senha"
            cy="input_senha_login"
            action={ (e) => setPassword(e.value) }
            className="input-login"
          />
          <span className="text-forgot-password">esqueceu a senha?</span>
          <div className="login-section">
            <button type="submit" onClick={ () => handleOnClick() }>
              Entrar
            </button>
          </div>
          <span className="text-login-with">entrar com</span>
          <div className="login-icons">
            <img src={ maca } alt="iconLoginApple" />
            <img src={ facebook } alt="iconLoginApple" />
            <img src={ google } alt="iconLoginApple" />
          </div>
          <span className="text-register">
            <Link to='/register'> Cadastre-se</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
export default Login;
