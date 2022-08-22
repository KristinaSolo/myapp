import React from 'react';
import Nav from '../nav/Nav';
import logo from '../data/assest/img/logo.png';
import './header.scss';



 function Header() {
  return (
    <>
    <div className='header'>
    <img src={logo} alt='logo' className='header__logo'></img>
    </div>
    <Nav/>
    </>
  )
}

export default Header
