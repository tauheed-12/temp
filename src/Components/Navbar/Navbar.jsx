import React from 'react'
import {Link} from 'react-router-dom';
import img from '../../Assests/logonav.jpg'
import './Navbar.css'
const Navbar = () => {
  return (
      <div className="header">
        <nav>
            <div className="logo">
                <img id="hlogo" src={img} alt="logoIcon"/> 
                <h1>ezSTAY</h1>
            </div>
            <div className="navlink">
                <Link to="/">Home </Link>
                <Link to="">Contact Us</Link>
                <Link to="">Properties</Link>
                <Link to="/signup" id="signup">sign up</Link>
                <Link to="/login" id="login">log in</Link>
            </div>
        </nav>
        <div className="line">
        </div>
    </div>
  )
}

export default Navbar
