import React, { useState } from 'react'
import styles from './Navbar.module.css'

export const Navbar = () => {
  // eslint-disable-next-line
  const [modal, setModal] = useState(false)

  return (
    <header>
    <nav className={styles.navCustom} >
        <h3 className={styles.header}>ILOHAM</h3>
        <ul className={styles.ul}>
          <li className={styles.liCustom}>
            <a className='a'  href="/">Home</a>
          </li>
          <li className={styles.liCustom}>
            <a  href="#projects">Projects</a>
          </li>
          <li className={styles.liCustom}>
            <a  href="!#">About</a>
          </li>
          <li className={`${styles.liCustom} `}>
            <a   href="!#">contact</a>
          </li>
          <li className={`${styles.liCustom} ${styles.mobile_button}`} >
            <i className="fas fa-bars"></i>
          </li>
        </ul>
    </nav>
    </header>
  )
}
