import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './styles/Nav.module.css'
function Nav() {
  return (
    <div className={styles.nav}>
        <NavLink className={styles.navLink} to='/countries'>Home</NavLink>
        <NavLink className={styles.navLink} to='/activity'>Add tourist activity</NavLink>
        <NavLink className={styles.navLink} to='/'>Main Page</NavLink>
    </div>
    
  )
}

export default Nav