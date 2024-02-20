import React from 'react'
import style from './Skill.module.css'

export const Skill = () => {
  return (
        <div>
            <h3 className={` ${style.infoHeader} ${style.about}`}>skills <i className="fa-solid fa-code"></i></h3>
            <div className={style.skillIcon}>
                <li><i className="fab fa-html5 fa-fade"></i></li>
                <li><i className="fab fa-css3 fa-bounce"></i></li>
                <li><i className="fa-brands fa-bootstrap  fa-flip"></i></li>
                <li><i className="fab fa-js fa-beat-fade "></i></li>
                <li><i className="fa-brands fa-react fa-spin"></i></li>
                <li><i className="fa-brands fa-square-github"></i></li>
            </div>
        </div>
  )
}
