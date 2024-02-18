import React from 'react'
import { Header } from './pages/Header'
import { Projects } from './pages/Projects'
import { Skill } from './pages/Skill'
import { GetInTouch } from './pages/GetInTouch'
import { Contact } from './pages/Contact'
import { About } from './pages/About'
import { Footer } from './pages/Footer'
// import drip from './drip.svg'

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
