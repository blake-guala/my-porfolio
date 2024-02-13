import React from 'react'

export const Navbar = () => {
  return (
    <nav className='nav-custom'>
        <h3 className='header'>Iheama</h3>
        <ul className='ul-custom'>
          <li className='li-custom'>
            <a   href="/">Home</a>
          </li>
          <li className='li-custom'>
            <a  href="/services">Service</a>
          </li>
          <li className='li-custom'>
            <a  href="!#">Contact</a>
          </li>
          <li className='li-custom hire'>
            <a  href="!#">hire me</a>
          </li>
        </ul>
    </nav>
  )
}
