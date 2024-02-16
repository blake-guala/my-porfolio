import React from 'react'

export const Navbar = () => {


  return (
    <nav className='nav-custom ' >
        <h3 className='header'>ILOHAM</h3>
        <ul className='ul-custom'>
          <li className='li-custom'>
            <a   href="/">Home</a>
          </li>
          <li className='li-custom'>
            <a  href="#projects">Projects</a>
          </li>
          <li className='li-custom'>
            <a  href="!#">About</a>
          </li>
          <li className='li-custom hire'>
            <a   href="!#">contact</a>
          </li>
        </ul>
    </nav>
  )
}
