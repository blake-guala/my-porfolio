import React from 'react'
import styles from './About.module.css'

export const About = () => {
  return (
    <div style={{marginTop: '4rem', marginLeft: 'auto', marginRight: 'auto', display: 'block'}}>
            <div className= {` ${styles.sectionBox} ${styles.bottom} ${styles.info} `} >
            <h4 className={styles.infoHeader}>About me</h4>
            <p>As an Developer, mathematician and Medical scientist my first love will always be solving problems
                . The web being a place i love the most.
            </p>
            <ul className={styles.socials}> 
                <li>
                    <a href="#!"><i className="fa-brands fa-twitter"></i></a>
                </li>
                <li>
                    <a href="#!"><i className="fa-brands fa-whatsapp"></i></a>
                </li>
                <li>
                    <a href="#!"><i className="fa-brands fa-linkedin"></i></a>
                </li>
                {/* <li>
                    <a href=""><i class="fa-brands fa-twitter"></i></a>
                </li> */}
            </ul>
        </div>
    </div>
  )
}
