import React from 'react'
import {Link} from 'react-router-dom';
import "./Forgetpass.css"
const Forgotpass = () => {
 return (
    <div>
<div className="forgot-password-container">
    <h2>Forgot Password</h2>
    <p>Enter your username or email address, and we'll send you a password reset email.</p>
    <label for="emailUsername">Email :</label>
    <input type="text" id="emailUsername" name="emailUsername" required/>
    <button type="button">Reset Password</button>
    <div className="login-link">
        Remember your password? <Link to="/Login">Login</Link>
    </div>
</div>
    </div>
  )
}

export default Forgotpass
