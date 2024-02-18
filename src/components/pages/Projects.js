import React from 'react'

export const Projects = () => {
  return (
    <div>
    <div className='skills'>
        <section>
            <div className='div-projects'>
            <h3 className='projects info-header'> Projects </h3>
            </div>
        </section>
        <div className='row '>
            <div className="col-sm section-box left">
                {/* <div> */}
                    <h3>Contact Keeper <i className="fa fa-address-book fa-flip"></i></h3>
                    <p>An app that stores contacts, users have to login first or register before use</p>
                {/* </div> */}
                {/* <div> */}
                    <ul className='listed'>
                    <h5 className='skill'>skills</h5>
                        <li>Css <i className="fab fa-css3 fa-bounce"></i></li>
                        <li>React <i className="fa-brands fa-react fa-spin"></i></li>
                        <li>Nodejs <i className="fa-brands fa-node-js"></i></li>
                    </ul>
                    <div className='div-a'>
                        <a href="#!">Source code <i className="fas fa-file-code"></i></a>
                    {/* </div> */}
                </div>
            </div>
            <div className="col-sm section-box right">
                <h3>Github Finder <i className="fa-brands fa-github fa-flip"></i></h3>
                <p>An app that searches for users in github</p>
                <ul className='listed'>
                <h5 className='skill'> skills used</h5>
                    <li>Css <i className="fab fa-css3 fa-bounce"></i></li>
                    <li>React <i className="fa-brands fa-react fa-spin"></i></li>
                    <li>GithubApi <i className="fa-brands fa-github fa-flip"></i></li>
                </ul>
                <div className='div-a'>
                <a href="#!">Source code <i className="fas fa-file-code"></i></a>
                </div>
            </div>
        </div>
        </div>
        <div className=" section-box bottom">
                <h3>IT Logger App <i class="fa-solid fa-cog fa-spin"></i><i class="fa-solid fa-cog fa-spin fa-spin-reverse"></i></h3>
                <p>An app used by IT department to track changes made. has CRUD 
                    functionalities</p>
                <ul className='listed'>
                <h5 className='skill '> skills</h5>
                    <li>Css <i className="fab fa-css3 fa-bounce"></i></li>
                    <li>React <i className="fa-brands fa-react fa-spin"></i></li>
                    <li>JSON Server <i className="fa fa-file" ></i> <i className="fa-solid fa-server"></i></li>
                </ul>
                <div className='div-a'>
                <a href="#!">Source code <i className="fas fa-file-code"></i></a>
                </div>
        </div>
    </div>
  )
}
