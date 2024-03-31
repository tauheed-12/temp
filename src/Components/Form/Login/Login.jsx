import React from 'react'
import {Link} from 'react-router-dom';
import "./Login.css"
import img1 from '../../../Assests/Logo-google-icon-PNG.png'
const Login = () => {
  return (
    <div className="blur-container">
    <div className="login-container">
        <h2>Welcome back! Login to your account</h2>
        <label for="emailUsername">Email or Username:</label>
        <input type="text" id="emailUsername" name="emailUsername" required/>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required/>
        <Link to="/login/forgetpassword" className="forgot-password">Forgot Password?</Link>

        <div className="login-options">
            <button type="button">Login</button>
            <button type="button" className="google-login">
                <img src={img1} alt="Google Icon"></img>
                Login with Google
            </button>
        </div>

        <div className="create-account">
            Don't have an account? <Link to="/Signup">Create Your Account</Link>
        </div>
        </div>
        </div>

  )
}

export default Login
