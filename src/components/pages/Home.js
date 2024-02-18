import React from 'react'
import svg from './web.svg'
// import drip from './drip.svg'

export const Home = () => {
  return (
    <div className=' section-top'>
        <div className="row background">
            <section className="col-sm">
                <h5>Hello there, <i className="fa-solid fa-hand-peace  fa-fade"></i></h5>
                <h1> I am Iloham Livingstone Iheama.</h1>
                <p className='green'>A FRONT END DEVELOPER.</p>
                <div>
                    <ul className='hire-resume'>
                        <li className='hired'>
                            <a href="#!">Hire me</a>
                        </li>
                        <li className='resume'>
                            <a href="#!">Resume</a>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="col-sm">
                <img className='img' src={svg} alt="background" />
            </section>
        </div>
        {/* <section>
            <img className='drip' src={drip} alt="drip..." />
        </section> */}
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
        <div>
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
        <div>
            <h3 className='about info-header'>skills <i className="fa-solid fa-code"></i></h3>
            <div className='skill-icon'>
                <li><i className="fab fa-html5 fa-fade"></i></li>
                <li><i className="fab fa-css3 fa-bounce"></i></li>
                <li><i className="fa-brands fa-bootstrap  fa-flip"></i></li>
                <li><i className="fab fa-js fa-beat-fade "></i></li>
                <li><i className="fa-brands fa-react fa-spin"></i></li>
                <li><i className="fa-brands fa-square-github"></i></li>
            </div>
        </div>
        <div>
            <h2 className='projects services info-header'>Contact</h2>
        </div>
        <div className=" section-box bottom  info" >
            <ul className='hire-me'>
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
        <div className=" section-box bottom info " >
            <h4 className='info-header'>About me</h4>
            <p>As an Developer, mathematician and Medical scientist my first love will always be solving problems
                . The web being a place i love the most.
            </p>
            <ul className='socials'> 
                <li>
                    <a href="#!"><i class="fa-brands fa-twitter"></i></a>
                </li>
                <li>
                    <a href="#!"><i class="fa-brands fa-whatsapp"></i></a>
                </li>
                <li>
                    <a href="#!"><i class="fa-brands fa-linkedin"></i></a>
                </li>
                {/* <li>
                    <a href=""><i class="fa-brands fa-twitter"></i></a>
                </li> */}
            </ul>
        </div>
        <div className=" section-box bottom info form " >
            <h4 className='info-header'>Get in Touch</h4>
            <form className='container form-custom' >
            <hr />
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text"  name='email' className="form-control input-custom"  placeholder='your name' />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" name='password' className="form-control input-custom"  placeholder='your email' />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label ">Message</label>
                    <input type="password" name='password' className="form-control input-custom message" 
                    placeholder='write your message...' />
                </div>
                <button type="submit " className="btn btn-primary button-custom button-custom ">Submit</button>
            </form>
        </div>
        <hr />
        <footer className='footer'>
            <p>Copyright &copy; 2024 Iloham livingstone iheama</p>
        </footer>
        
    </div>
  )
}