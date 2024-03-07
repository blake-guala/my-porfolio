import React from 'react'
import styles from './About.module.css'

export const About = () => {
  return (
    <div id='about' style={{marginTop: '4rem', marginLeft: 'auto', marginRight: 'auto', display: 'block'}} > 
            <div className= {` ${styles.sectionBox} ${styles.bottom} ${styles.info} ` }  >
            <h4 className={styles.infoHeader}>About me</h4>
            <p>As an Developer, mathematician and Medical scientist my first love will always be solving problems {''}
                <i className="fas fa-book-reader" style={{color: "#B197FC"}}></i>
                . The web being a place i love the most. i also play sports like basketball {''}
                <i className="fa-solid fa-basketball fa-bounce" style={{color: "#B197FC"}}></i>.
            </p>
            <ul className={styles.socials}> 
                <li>
                    <a href="https://twitter.com/arusi_ogologo" target="_blank" rel="noreferrer noopener">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                </li>
                <li>
                    <a href="https://wa.me/qr/E7QILXD2ROI5K1" target="_blank" rel="noreferrer noopener">
                        <i className="fa-brands fa-whatsapp"></i>
                        </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/iloham-livingstone-victory-233507240/" target="_blank" rel="noreferrer noopener">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </li>
                {/* <li>
                    <a href=""><i class="fa-brands fa-twitter"></i></a>
                </li> */}
            </ul>
        </div>
    </div>
  )
}
