import React from 'react';
import "./Welcome.css";
import Cookies from 'js-cookie';

const Welcome = () => {

  if (Cookies.get('username') != null) {
    window.location.href = '/dashboard';
  }

  return (

    <div>
      <div className="welcome">
        <img src="evault-logo.png" alt="eVault" className='evault__banner' />
        <div className="right">
          <p className='welcome__p'> Welcome to eVault - Court </p>
          <div className="buttons__welcome">
            <a className='button__welcome' href="/signin">Sign in</a>
            <a className='button__welcome' href="/register">Register</a>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Welcome