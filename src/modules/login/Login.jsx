import React from 'react';
import Input from '../../components/Input';
import './login.css';
import maca from '../../images/maca.png';
import google from '../../images/google.png';
import facebook from '../../images/facebook.png';
import { useDispatch, useSelector } from 'react-redux';
import { onChangeInput } from './login.slice';
import { login } from '../../data/api/login.api';
import { Link } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch()
  const { email, password } = useSelector((state) => state.login)

  return (
    <div className="container">
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
            action={ (e) => dispatch(onChangeInput({name: e.name, value: e.value})) }
            className="input-login"
          />
          <Input
            label="Senha"
            type="password"
            value={password}
            name="password"
            title="Senha"
            cy="input_senha_login"
            action={ (e) => dispatch(onChangeInput({name: e.name, value: e.value})) }
            className="input-login"
          />
          <span className="text-forgot-password">esqueceu a senha?</span>
          <div className="login-section">
            <button type="submit" onClick={ () => login(email, password) }>
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
