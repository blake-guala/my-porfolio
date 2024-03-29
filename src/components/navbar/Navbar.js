import React, { useState } from 'react'
import styles from './Navbar.module.css'
import toggle from '../images/toggle.svg'
import x from '../images/x.svg'

export const Navbar = () => {
  // eslint-disable-next-line
  const [modal, setModal] = useState(false)

  const onToggle = (e) => {
    setModal(!modal)
    
  } 

  return (
    <header>
    <nav className={styles.navCustom} >
      <div>
        <h3 className={styles.header}>ILOHAM</h3>
        <ul className={`${styles.ul} ${modal && styles.active}`}>
          <li className={styles.liCustom}>
            <a className='#'  href="/">Home</a>
          </li>
          <li className={styles.liCustom}>
            <a  href="#projects">Projects</a>
          </li>
          <li className={styles.liCustom}>
            <a  href="#about">About</a>
          </li>
          <li className={`${styles.liCustom} `}>
            <a   href="#contact">contact</a>
          </li>
        </ul>
      </div>
      <div onClick={onToggle} className={`${styles.liCustom} ${styles.mobile_button}`}>
          { modal ? <img src={x} alt="return" /> :  <img src={toggle}  alt="menu" /> }
      </div>

    </nav>
    </header>
  )
}
