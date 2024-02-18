import React from 'react'

export const About = () => {
  return (
    <div style={{marginTop: '4rem'}}>
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
    </div>
  )
}
