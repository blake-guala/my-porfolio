import React from 'react'
import svg from '../../images/webb.svg'
import styles from './Header.module.css'
import { toast } from 'react-toastify'

export const Header = () => {
    const onClick = () => {
        toast.warn('Resume not updated yet!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }
  return (
    <div className={` ${styles.background}`}>
            <section className="none">
                <h5>Hello there, <i className="fa-solid fa-hand-peace  fa-fade"></i></h5>
                <h1> I am Iloham Livingstone Iheama.</h1>
                <p className={styles.green}>A FRONT END DEVELOPER.</p>
                <div>
                    <ul className={styles.hireResume}>
                        <li className={styles.hired}>
                            <a href="#hire">Hire me</a>
                        </li>
                        <li className={styles.resume}>
                            <a onClick={onClick}  href="#!">Resume</a>
                        </li>
                    </ul>
                </div>
            </section>
            <section className='none'>
                <img className={styles.img} src={svg} alt="background" />
            </section>
        </div>
  )
}
