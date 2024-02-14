import React from 'react'
import svg from './web.svg'
import drip from './drip.svg'

export const Home = () => {
  return (
    <div className=' section-top'>
        <div className="row background">
            <section className="col-sm">
                <h5>Hello there,</h5>
                <h1> i am Iloham livingstone.</h1>
                <p className='green'> FRONT END DEVELOPER</p>
            </section>
            <section className="col-sm">
                <img className='img' src={svg} alt="backround" />
            </section>
        </div>
        <section>
            <img className='drip' src={drip} alt="drip..." />
        </section>
        <section>
            hhh
        </section>
        
    </div>
  )
}
