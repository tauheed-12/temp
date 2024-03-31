import React from 'react'
import {Link} from 'react-router-dom';
import "./Signup.css"
const Signup = () => {
  return (
    <div className="signup-container">
    <h2>Create Your Account</h2>
    <div className="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required/>
    </div>

    <div className="form-group">
        <label for="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" required/>
    </div>
    <div className="form-group">
        <label for="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" required/>
    </div>

    <div className="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required/>
    </div>
        <p id="one">show password</p>
        <input type='checkbox'></input>
    <button type="button">Create Your Account</button>
    <div className="terms">
        By registering, you agree to the <Link to="#">privacy policy</Link> and <Link to="#">terms of service</Link>.
    </div>

    <div className="login">
        Already have an account? <Link to="/login">Login</Link>
    </div>
</div>

  )
}

export default Signup
