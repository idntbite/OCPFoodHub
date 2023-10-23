import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './AppHeader.css';
import logo from '../resources/ocp-logo.svg';

function AppHeader() {
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignUpHover = () => {
    setShowSignUp(true);
  };

  const handleSignUpLeave = () => {
    setShowSignUp(false);
  };

  return (
    <header className="app-header">
      <div className="left-corner">
        <a href="https://www.ocpgroup.ma/">
            <img src={logo} alt="OCP Logo" className="logo" />
        </a>

      </div>
      <div className="app-name">
        <NavLink to="/" style={{color: 'white'}}>
            OCPFoodHub
        </NavLink>    
        </div>

      <div className="right-corner">
        <div
          className="login"
          onMouseEnter={handleSignUpHover}
          onMouseLeave={handleSignUpLeave}
        >
            <NavLink to="/login" style={{color: 'white'}}>
          Login
          {showSignUp && (
            <div className="signup-dropdown">
              <NavLink to="/signup"
                style={{color: 'white'}}
                className="signup-link">
                Sign Up
              </NavLink>
            </div>
          )}
          </NavLink>
        </div>
      </div>

    </header>
  );
}

export default AppHeader;
