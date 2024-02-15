import React from 'react'
import svg from './web.svg'
// import drip from './drip.svg'

export const Home = () => {
  return (
    <div className=' section-top'>
        <div className="row background">
            <section className="col-sm">
                <h5>Hello there,</h5>
                <h1> i am Iloham livingstone iheama.</h1>
                <p className='green'> FRONT END DEVELOPER</p>
            </section>
            <section className="col-sm">
                <img className='img' src={svg} alt="backround" />
            </section>
        </div>
        {/* <section>
            <img className='drip' src={drip} alt="drip..." />
        </section> */}
        <div className='skills'>
        <section>
            <div className='div-projects'>
            <h3 className='projects'> Projects(some) </h3>
            </div>
        </section>
        <div className='row '>
            <section className="col-sm section-box left">
                {/* <div> */}
                    <h3>Contact Keeper <i className="fa fa-address-book"></i></h3>
                    <p>An app that stores contacts, users have to login first or register before use</p>
                {/* </div> */}
                {/* <div> */}
                    <ul className='listed'>
                    <h5 className='skill'>skills</h5>
                        <li>React <i className="fa-brands fa-react"></i></li>
                        <li>Nodejs <i className="fa-brands fa-node-js"></i></li>
                    </ul>
                    <div className='div-a'>
                        <a href="#!">Source code <i className="fas fa-file-code"></i></a>
                    {/* </div> */}
                </div>
            </section>
            <section className="col-sm section-box right">
                <h3>Github Finder <i className="fa-brands fa-github"></i></h3>
                <p>An app that searches for users in github</p>
                <ul className='listed'>
                <h5 className='skill'> skills</h5>
                    <li>React <i className="fa-brands fa-react"></i></li>
                    <li>GithubApi <i className="fa-brands fa-github"></i></li>
                </ul>
                <div className='div-a'>
                <a href="#!">Source code <i className="fas fa-file-code"></i></a>
                </div>
            </section>
        </div>
        </div>
        <div>
        <section className=" section-box bottom">
                <h3>IT Logger App <i className="fas fa-hard-hat"></i></h3>
                <p>An app used by IT depart to track changes made. has CRUD 
                    functionalities</p>
                <ul className='listed'>
                <h5 className='skill'> skills</h5>
                    <li>React <i className="fa-brands fa-react"></i></li>
                    <li>JSON Server <i className="fa fa-file" ></i> <i className="fa-solid fa-server"></i></li>
                </ul>
                <div className='div-a'>
                <a href="#!">Source code <i className="fas fa-file-code"></i></a>
                </div>
            </section>
        </div>
        <section>
            <h3 className='about'>skills <i className="fa-solid fa-code"></i></h3>
            <div className='skill-icon'>
                <li><i className="fab fa-html5"></i></li>
                <li><i className="fab fa-css3"></i></li>
                <li><i className="fa-brands fa-bootstrap"></i></li>
                <li><i className="fab fa-js"></i></li>
                <li><i className="fa-brands fa-react"></i></li>
                <li><i className="fa-brands fa-square-github"></i></li>
            </div>
        </section>
    </div>
  )
}
