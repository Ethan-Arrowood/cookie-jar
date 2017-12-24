import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import './Home.css';
import Cookie from './cookie.svg';

export default ({ apiStatus }) => (
  <div className="container" style={{
    height: "100vh",
    display: "grid",
    gridTemplate: "80px auto 70px / auto",
  }}>
    <div className="header">
      <div className="title">
        <h1>Cookie Jar</h1>
      </div>  

      <ul className="header-menu">
        <li><span>Sign Up</span></li>
        <li><span>Log In</span></li>
        <li><span>About</span></li>
        <li><span>Github</span></li>
      </ul>
    </div>
    <div className="body">
      <div className="cookie-section">
        <img src={Cookie} className="cookie" alt="cookie" />
      </div>
      <div className="text-section">
        <h1>Cookie Jar - Incentivised Task Management</h1>
        <p>With Cookie Jar, you can better manage your team by rewarding them for every task they complete. Each team member or "Cookie Collector" gets a "Cookie Jar" that tracks how many cookies they have earned. The manager can create and edit tasks, assigning cookie values to them. When another user completes that task and it is approved by the manager, the incentive is added to that collectors cookie jar!</p>
        <button className="get-started">Get Started</button>
      </div>
    </div>
    <div className="footer">
      <div className="social-media">
        <ul className="footer-menu">
          <li><FontAwesomeIcon icon={["fab", "facebook"]} size="2x"/></li>
          <li><FontAwesomeIcon icon={["fab", "twitter"]} size="2x"/></li>
          <li><FontAwesomeIcon icon={["fab", "instagram"]} size="2x"/></li>
        </ul>
      </div>
      <div className="api-status">
        <span>API Status: <span style={{color: apiStatus === 'OK' ? 'green' : 'red'}}>{apiStatus || ''}</span></span>
      </div>
      <div className="copyright">
        <span><FontAwesomeIcon icon={["fal", "copyright"]} size="1x"/> 2017 Ethan Arrowood</span>
      </div>
    </div>
  </div>
);