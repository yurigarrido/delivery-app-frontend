import React, { useState } from 'react';
import Input from '../../components/Input';
import './register.css';
import maca from '../../images/maca.png';
import google from '../../images/google.png';
import facebook from '../../images/facebook.png';
import { registerUser } from '../../data/api/register.api';

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  
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
          <section className="text-wellcome-register">
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
            action={ (e) => setName(e.value) }
            className="input-register"
          />
          <Input
            label="Email"
            type="text"
            value={email}
            name="email"
            title="Email"
            cy="input_email_register"
            action={ (e) => setEmail(e.value) }
            className="input-register"
          />
          <Input
            label="Senha"
            type="password"
            value={password}
            name="password"
            title="Senha"
            cy="input_senha_register"
            action={ (e) => setPassword(e.value) }
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
          {/* <button onClick={() => setIsOpen(true)}>Open Modal</button>

          <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            Fancy Modal
          </Modal> */}
        </div>
      </div>
    </div>
  )
}
export default Register;
