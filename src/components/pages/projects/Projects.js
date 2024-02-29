import React from 'react'
import style from './Projects.module.css'
import { toast } from 'react-toastify'

export const Projects = () => {
    const onClick = (e) => {
        
        toast.warn('Not hosted Yet!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            // transition: Bounce,
            });
    }
  return (
    <div>
    <div id='projects' >
        <section>
            <div className={style.divProjects}>
            <h3 className={`${style.projects} ${style.infoHeader}`}> Projects </h3>
            </div>
        </section>
        <div className={style.row}>
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
                        <ul>
                            <li>
                                <a onClick={onClick} href="#!">Live Site</a>
                            </li>
                            <li>
                                <a  href="https://github.com/blake-guala/contacts-keeper-application-" target='_blank' rel="noreferrer">
                                    Source code <i className="fas fa-file-code"></i>
                                </a>
                            </li>
                        </ul>
                        
                    {/* </div> */}
                </div>
            </div>
            <div className={`col-sm ${style.sectionBox} ${style.right}`}>
                <h3>Github Finder <i className="fa-brands fa-github fa-flip"></i></h3>
                <p>An app that searches for users in github, you can get users details.</p>
                <h5 className={style.skill}> skills used</h5>
                <ul className={style.listed}>
                    <li>Css <i className="fab fa-css3 fa-bounce"></i></li>
                    <li>React <i className="fa-brands fa-react fa-spin"></i></li>
                    <li>GithubApi <i className="fa-brands fa-github fa-flip"></i></li>
                </ul>
                <div className={`${style.divA} ${style.divB}`}>
                        <ul>
                            <li>
                                <a onClick={onClick} href="#!">Live Site </a>
                            </li>
                            <li>
                                <a href="https://github.com/blake-guala/Github-User-finder-App" target='_blank'  rel="noreferrer">
                                    Source code 
                                <i className="fas fa-file-code"></i>
                                </a>
                            </li>
                        </ul>
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
                        <ul>
                            <li>
                                <a onClick={onClick} href="#!">Live Site </a>
                            </li>
                            <li>
                                <a href="https://github.com/blake-guala/it-logger-app" target='_blank' rel="noreferrer">
                                    Source code <i className="fas fa-file-code"></i>
                                </a>
                            </li>
                        </ul>
                </div>
        </div>
    </div>
  )
}
