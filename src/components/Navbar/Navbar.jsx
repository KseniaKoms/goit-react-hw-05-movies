import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <header>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        Home
      </NavLink>
      <NavLink
        to="movies"
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        Movies
      </NavLink>
    </header>
  );
};

export default Navbar;
