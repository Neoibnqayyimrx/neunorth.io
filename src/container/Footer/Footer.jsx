import React from 'react';
import { images } from '../../constants';
import './Footer.scss';


const Footer = () => {
  return (
    <footer className="app__footer app__whitebg">
      <div className="app__footer-content">
        <div className="app__footer-logo">
          <img src={images.logo} alt="logo" />
          <p className="p-text">Build Momentum not Bottlenecks.</p>
        </div>

        <div className="app__footer-links">
          <div className="app__footer-column">
            <h3 className="head-text">Navigation</h3>
            <ul>
              {['home', 'about', 'schedule', 'global', 'capability'].map((item) => (
                <li key={`footer-${item}`}>
                  <a href={`#${item}`} className="p-text">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="app__footer-column">
            <h3 className="head-text">Connect</h3>
            <ul>
              <li><a href="#" className="p-text">Neunorth Global</a></li>
              <li><a href="#" className="p-text">Founders</a></li>
              <li><a href="#" className="p-text">Schedule a Session</a></li>
            </ul>
          </div>

          <div className="app__footer-column">
            <h3 className="head-text">Legal</h3>
            <ul>
              <li><a href="#" className="p-text">Privacy Policy</a></li>
              <li><a href="#" className="p-text">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="app__footer-bottom">
        <p className="p-text">© 2026 Neunorth. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;