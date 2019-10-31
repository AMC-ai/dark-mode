import React, { useState } from 'react';
import { useDarkMode } from './hooks/useDarkMode';

const Navbar = () => {
  const [darkMode, setDarkMode, handleChanges] =
    useDarkMode('darkMode', false, toggleMode);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
    handleChanges();
  };
  console.log(darkMode)
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle' : 'toggle toggled'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
