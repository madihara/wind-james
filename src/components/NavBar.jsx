import React from 'react'
import { Link } from 'gatsby'

import logo from '../images/logo-2018.png'

import styles from './navbar.module.css'

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div>
        <img src={logo} alt="wind and james logo" className={styles.logo} />
      </div>
      <div className={styles.links}>
        <Link to="" className={styles.link}>Home</Link>
        <Link to="" className={styles.link}>about us</Link>
        <Link to="" className={styles.link}>classes</Link>
        <Link to="" className={styles.link}>events</Link>
        <Link to="" className={styles.link}>weddings</Link>
        <Link to="" className={styles.link}>blog</Link>
        <Link to="" className={`${styles.link} ${styles.contact}`} > contact us</Link>
      </div>
    </div>
  )
}

export default NavBar;