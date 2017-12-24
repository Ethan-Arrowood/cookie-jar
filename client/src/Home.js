import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import './Home.css';

export default ({ apiStatus }) => (
  <div className="abc">
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
      <p>Cookie Jar Body</p>
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
      <div className="copywrite">
        <span>Copywrite 2017 Ethan Arrowood</span>
      </div>
    </div>
  </div>
);