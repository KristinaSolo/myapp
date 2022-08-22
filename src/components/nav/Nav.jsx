import React from 'react';
import './nav.scss';
import poisk from '../data/assest/img/poisk2.png';



 function Nav() {
  return (
    <div className='nav'>
    <a href='#' className='nav__links'>Progress</a>
    <a href='#' className='nav__links'>Log In</a>
    <img src={poisk} alt='poisk' className='nav__poisk'></img>
      
    </div>
  )
};

export default Nav