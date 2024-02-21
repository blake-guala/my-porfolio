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
          <li className={`${styles.liCustom} ${styles.hire}`}>
            <a   href="!#">contact</a>
          </li>
          {/* <li className={styles.liCustom} style={{color: '#00FF00', boxShadow: '0 3px 10px rgb(2, 250, 77);'}}>
            <i className="fas fa-bars"></i>
          </li> */}
        </ul>
    </nav>
    </header>
  )
}
