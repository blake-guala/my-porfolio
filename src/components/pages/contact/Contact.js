import React from 'react'
import styles from './Contact.module.css'

export const Contact = () => {
  return (
    <div style={{marginTop: '3rem'}}>
        <div className={`${styles.sectionBox} ${styles.bottom} ${styles.info}`} >
        <h2 className={`${styles.projects} ${styles.infoHeader} ${styles.services}`}>Contact Me</h2>

            <ul className={styles.hireMe}>
                <li>
                    <i className="fa-solid fa-phone"></i> <a href="tel:+2348136092010">PHONE</a>
                </li>
                <li>
                    <i className="fa fa-envelope"></i> <a href="mailto:ilohamlivingstone@gmail.com">Email</a>
                </li>
                <li>
                <i className='fab fa-github'/> <a href="https://github.com/blake-guala">Github</a>
                </li>
            </ul>
        </div>
    </div>
  )
}
