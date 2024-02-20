import React from 'react'
import { Header } from './pages/header/Header'
import { Skill } from './pages/skill/Skill'
import { Projects } from './pages/projects/Projects'
import { GetInTouch } from './pages/getintouch/GetInTouch'
import { Contact } from './pages/contact/Contact'
import { Footer } from './pages/footer/Footer'
import { About } from './pages/about/About'

export const Home = () => {
  return (
    <div className=' section-top'>
        <Header/>
        <Projects/>
        <Skill/>
        <About/>
        <Contact/>
        <GetInTouch/>
        <hr />
        <Footer/>
    </div>
  )
}
