import React from 'react';
import Input from '../../components/Input';
import './register.css';
import maca from '../../images/maca.png';
import google from '../../images/google.png';
import facebook from '../../images/facebook.png';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../data/api/register.api';
import { onChangeInput } from './register.slice'

const Register = () => {
  const dispatch = useDispatch()
  const { email, password, name } = useSelector((state) => state.register)

  const createUser = async () => {
    const payload = {
      name,
      email,
      password
    }
    await registerUser(payload);
  };

  return (
    <div className="container">
      <div className="image-register-box" />
      <div className="register-box">
        <div className="register-box-content">
          <section className="text-wellcome">
            <p>Seja Bem vindo(a)!</p>
            <span>Cadastre-se para entrar na plataforma</span>
          </section>
          <Input
            label="Nome"
            type="text"
            value={name}
            name="name"
            title="Nome"
            cy="input_nome_register"
            action={ (e) => dispatch(onChangeInput({name: e.name, value: e.value})) }
            className="input-register"
          />
          <Input
            label="Email"
            type="text"
            value={email}
            name="email"
            title="Email"
            cy="input_email_register"
            action={ (e) => dispatch(onChangeInput({name: e.name, value: e.value})) }
            className="input-register"
          />
          <Input
            label="Senha"
            type="password"
            value={password}
            name="password"
            title="Senha"
            cy="input_senha_register"
            action={ (e) => dispatch(onChangeInput({name: e.name, value: e.value})) }
            className="input-register"
          />
          <div className="register-section">
            <button type="submit" onClick={ () => createUser()}>
              Criar conta
            </button>
          </div>
          <span className="text-register-with">entrar com</span>
          <div className="register-icons">
            <img src={ maca } alt="iconrLoginApple" />
            <img src={ facebook } alt="iconLoginApple" />
            <img src={ google } alt="iconLoginApple" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Register;
