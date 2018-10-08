import React from 'react';
import Tilt from 'react-tilt';

import logo from './logo.png'
import './logo.css'

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt className="Tilt br2 shadow-2" option={{max: 55}} style={{height: 150, width: 150}}>
        <div className="Tilt-inner pa3"><img src={logo} alt="logo" /></div>
      </Tilt>
    </div>
  )
}

export default Logo;
