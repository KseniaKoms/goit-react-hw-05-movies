import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="movies">Movies</NavLink>
    </header>
  );
};

export default Navbar;
