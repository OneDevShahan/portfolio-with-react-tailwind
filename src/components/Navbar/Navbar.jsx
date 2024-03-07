import React from 'react'
import './Navbar.css';
import { Link } from 'react-scroll';
import Logo from '../../assets/logo.png';
import { FcCustomerSupport } from "react-icons/fc";

const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='siteLogo' src={Logo} alt='Logo icon'/>
      <div>
        <Link to='about' smooth={true} className='navItems'>Home</Link>
        <Link to='about' smooth={true} className='navItems'>About</Link>
        <Link to='about' smooth={true} className='navItems'>Skills</Link>
        <Link to='about' smooth={true} className='navItems'>Projects</Link>
      </div>
      <button className='contactMeBtn'> <FcCustomerSupport className='contactMeImg'/>Contact Me</button>
    </div>
  )
}

export default Navbar
