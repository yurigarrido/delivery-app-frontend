import React, { useContext } from 'react'
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import icoMenu from '../../images/ico-menu.svg'
import './header.css';

const Header = () => {
  const isMobile =  window.screen.width < 497
  const [menuOpen, setMenuOpen] = useState(false)
  const { setAuth, user } = useContext(AuthContext)

    console.log(user)
  const handleLoggout = () => {
    localStorage.removeItem('userData')
    setAuth(false)
  }

  return (
    <>
    {isMobile ? 
      <>
        <header className='header-container'>
          <div className='menu' onClick={() => setMenuOpen(true)}>
            <img src={icoMenu} alt="menu sandwich" />
            <span id='title-header'>Zé Birita</span>
          </div>
        </header>
        <section className={`left-menu${menuOpen ? '-open' : ''}`}>
          <button onClick={() => setMenuOpen(false)}>X</button>
          <div className='menu-container'>
            <div className='products' onClick={()=> <Navigate to='/home'/>} >produtos</div>
            <div className='requests'>meus pedidos</div>
            <div className='item'>item</div>
            <div className='user'>{user.user.name}</div>
            <div className='logout' onClick={() => handleLoggout()}>sair</div>
          </div>
        </section>
      </>
      : 
      <header className='header-container'>
        <span id='title-header'>Zé Birita</span>
        <div className='products'  >produtos</div>
        <div className='requests'>meus pedidos</div>
        <div className='item'>item</div>
        <div className='user'>{user.user.name}</div>
        <div className='logout' onClick={() => handleLoggout()}>sair</div>
      </header>}
    </>
  )
}

export default Header