import React from 'react'
import { Header } from './pages/Header'
import { Projects } from './pages/Projects'
import { Skill } from './pages/Skill'
import { GetInTouch } from './pages/GetInTouch'
import { Footer } from './pages/Footer'
import { Contact } from './pages/contact/Contact'
import { About } from './pages/about/About'

export const Home = () => {
  return (
    <div className=' section-top'>
        <Header/>
        <Projects/>
        <Skill/>
        <Contact/>
        <About/>
        <GetInTouch/>
        <hr />
        <Footer/>
    </div>
  )
}