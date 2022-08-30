import React from 'react'
import './footer.scss'
import logo from '../data/assest/img/logo.png';

 function Footer() {
  return (
    <div className='footer'>
    <div className='footer__logo'>
      <img className='logo' src={logo} alt="logo"></img>
    </div>
      
    </div>
  )
}

export default Footer
