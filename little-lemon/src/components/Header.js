// src/components/Header.js
import React from 'react';
import logo from '../assests/Logo.svg';

function Header() {
  return (
    <header>
      <img src={logo} alt="Little Lemon Logo" />
    </header>
  );
}

export default Header;
