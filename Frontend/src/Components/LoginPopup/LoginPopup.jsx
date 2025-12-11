import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowlogin }) => {
  const [currstate, setcurrstate] = useState("Sign Up");

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currstate}</h2>
          <img
            onClick={() => setShowlogin(false)}
            src={assets.cross_icon}
            alt="close"
            style={{ cursor: 'pointer' }}
          />
        </div>
        <div className="login-popup-inputs">
          {currstate==="Login"?<></>:<input type="text" placeholder="Your Name" required />}
          
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button>{currstate==="Sign Up"?"Create Account":"Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
        {currstate==="Login"
        ?<p>Create a new account? <span onClick={()=>setcurrstate("Sign Up")}>  Click here</span></p>
        :<p>Already have an account <span onClick={()=>setcurrstate("Login")}>Login here</span></p>}
      </form>
    </div>
  );
};

export default LoginPopup;
