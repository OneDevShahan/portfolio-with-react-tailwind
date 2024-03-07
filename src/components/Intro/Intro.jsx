import React from 'react'
import './Intro.css';
import { Link } from 'react-scroll';
import { PiBagSimpleFill } from "react-icons/pi";
import Profile from '../../assets/Profile1.png'

const Intro = () => {
  return (
    <div className='intro'>
      <div className='introContent'>
        <span className='hi'>Hi,</span>
        <span className='introText'>I'm  <span className='introName'>Shahan</span><br/>Full Stack developer</span>
        <p className='introPara'>I'm a full-stack developer specialized in building (and occasionally designing) exceptional digital experiences. Currently I'm focused on building responsive full-stack web applications.</p>
        <Link to='contact' smooth={true}><button className='btn'><PiBagSimpleFill className='hireMeImg'/>Let's Collab</button> </Link>
      </div>
      <div>
      <img src={Profile} alt='Profile icon' className='profileImg'/>
      </div>
    </div>
  )
}

export default Intro
