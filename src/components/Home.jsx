import React from 'react'
import Products from './Products'
import Banner from '../images/hero.jpg'

const Home = () => {
  return (
    <div className='home'>
        <div className="hero">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img src={Banner} alt="Hero" />
                        <div className="content">
                            <h5 className="title">New Season Arrivals</h5>
                            <p className="subtitle">Check out all the trends</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Products />
    </div>
    
  )
}

export default Home
