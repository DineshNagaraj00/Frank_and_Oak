import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import './Login.css';

function Login({ setShowLogin }) {
  const [currentState, setCurrentState] = useState("Sign up");

  function handleClose(e) {
    e.preventDefault();
    setShowLogin(false);
    console.log(setShowLogin);
  };

  return (
    <div className='login_popUP'>
      <form className='login_popUp_container'>
        <div className="login_title">
          <h2 style={{ color: 'black' }}>{currentState}</h2>
          <Link onClick={handleClose}><CloseIcon /></Link>
        </div>
        <div className="login_input">
          {currentState === 'Login' ? <></> : <input type="text" placeholder='Your Name' required />}
          <input type="email" placeholder='Your Email' required />
          <input type="password" placeholder='Your Password' required />
        </div>
        <button>{currentState === "Sign up" ? "Sign up" : "Login"}</button>
        <div className="login_popup_Condition">
          <input type="checkbox" required />
          <p>By Continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currentState === 'Login' ?
          <p>Create a new account ? <span onClick={() => setCurrentState("Sign up")}>Click here</span></p> :
          <p>Already Have an account ? <span onClick={() => setCurrentState('Login')}>Login here</span></p>
        }
      </form>
    </div>
  );
}

export default Login;
