import { faFacebook, faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/LogoWhite.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="container">
            <div className="row">
                <div className="col">
                    <Link to="/"><img src={Logo} alt="Logo" /></Link>
                    <div className="content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque saepe sunt sed eius reiciendis similique ullam animi in, quasi ipsum maiores, necessitatibus dignissimos id quaerat facere architecto at, molestias harum!</p>
                    </div>
                </div>
                <div className="col">
                    <h3>Quick Links</h3>
                    <div className="nav">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/products">Products</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col">
                    <h3>Follow Us</h3>
                    <div className="right">
                        <Link to="/"><FontAwesomeIcon icon={faFacebook} /></Link>
                        <Link to="/"><FontAwesomeIcon icon={faInstagramSquare} /></Link>
                        <Link to="/"><FontAwesomeIcon icon={faTwitterSquare} /></Link>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <hr />
                    <div className="copyRights">
                        <p className="copy">&copy; 2022. All Rights Reserved. Powered by Miljan Peric. </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
