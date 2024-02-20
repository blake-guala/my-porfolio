import React from 'react'
import svg from '../../images/web.svg'
import styles from './Header.module.css'

export const Header = () => {
  return (
    <div className={`row ${styles.background}`}>
            <section className="col-sm">
                <h5>Hello there, <i className="fa-solid fa-hand-peace  fa-fade"></i></h5>
                <h1> I am Iloham Livingstone Iheama.</h1>
                <br />
                <p className={styles.green}>A FRONT END DEVELOPER.</p>
                <div>
                    <ul className={styles.hireResume}>
                        <li className={styles.hired}>
                            <a href="#!">Hire me</a>
                        </li>
                        <li className={styles.resume}>
                            <a href="#!">Resume</a>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="col-sm">
                <img className='img' src={svg} alt="background" />
            </section>
        </div>
  )
}
