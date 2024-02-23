import React from 'react'
import style from './Projects.module.css'

export const Projects = () => {
  return (
    <div>
    <div >
        <section>
            <div className={style.divProjects}>
            <h3 className={`${style.projects} ${style.infoHeader}`}> Projects </h3>
            </div>
        </section>
        <div className='row '>
            <div className={`col-sm ${style.sectionBox} ${style.left}`}>
                {/* <div> */}
                    <h3>Contact Keeper <i className="fa fa-address-book fa-flip"></i></h3>
                    <p>An app that stores contacts, users have to login first or register before use.</p>
                {/* </div> */}
                {/* <div> */}
                <h5 className={style.skill}>skills used</h5>
                    <ul className={style.listed}>
                        <li>Css <i className="fab fa-css3 fa-bounce"></i></li>
                        <li>React <i className="fa-brands fa-react fa-spin"></i></li>
                        <li>Nodejs <i className="fa-brands fa-node-js"></i></li>
                    </ul>
                    <div className={style.divA}>
                        <a href="#!">Source code <i className="fas fa-file-code"></i></a>
                    {/* </div> */}
                </div>
            </div>
            <div className={`col-sm ${style.sectionBox} ${style.right}`}>
                <h3>Github Finder <i className="fa-brands fa-github fa-flip"></i></h3>
                <p>An app that searches for users in github.</p>
                <h5 className={style.skill}> skills used</h5>
                <ul className={style.listed}>
                    <li>Css <i className="fab fa-css3 fa-bounce"></i></li>
                    <li>React <i className="fa-brands fa-react fa-spin"></i></li>
                    <li>GithubApi <i className="fa-brands fa-github fa-flip"></i></li>
                </ul>
                <div className={`${style.divA} ${style.divB}`}>
                <a href="#!">Source code <i className="fas fa-file-code"></i></a>
                </div>
            </div>
        </div>
        </div>
        <div className={`${style.sectionBox} ${style.bottom} `}>
                <h3>IT Logger App <i className="fa-solid fa-cog fa-spin"></i>
                    <i className="fa-solid fa-cog fa-spin fa-spin-reverse"></i>
                </h3>
                <p>An app used by IT department to track changes made,with CRUD 
                    functionalities.</p>
                <h5 className={style.skill}> skills used</h5>
                <ul className={style.listed}>
                    <li>Css <i className="fab fa-css3 fa-bounce"></i></li>
                    <li>React <i className="fa-brands fa-react fa-spin"></i></li>
                    <li>JSON Server <i className="fa fa-file" ></i> <i className="fa-solid fa-server"></i></li>
                </ul>
                <div className={`${style.divA} ${style.divB}`}>
                <a href="#!">Source code <i className="fas fa-file-code"></i></a>
                </div>
        </div>
    </div>
  )
}
