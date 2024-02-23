import React, { useState } from 'react'
import styles from './Navbar.module.css'

export const Navbar = () => {
  // eslint-disable-next-line
  const [modal, setModal] = useState(false)

  const onToggle = (e) => {
    setModal(!modal)
    
  } 

  return (
    <header>
    <nav className={styles.navCustom} >
        <h3 className={styles.header}>ILOHAM</h3>
        <ul className={`${styles.ul} ${modal && styles.active}`}>
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
        </ul>
        <div onClick={onToggle} className={`${styles.liCustom} ${styles.mobile_button}`}>
          { modal ? <i className="fa-solid fa-x"></i> :  <i  className="fas fa-bars fa-lg"></i> }
        </div>
    </nav>
    </header>
  )
}
