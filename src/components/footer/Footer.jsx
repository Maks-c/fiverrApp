import React from 'react';
import './Footer.scss'
import twitter from 'img/twitter.png'
import pinterest from 'img/pinterest.png'
import linkedin from 'img/linkedin.png'
import facebook from 'img/facebook.png'
import instagram from 'img/instagram.png'
import language from 'img/language.png'
import accessibility from 'img/accessibility.png'
import coin from 'img/coin.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
          </div>
          <div className="item">
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
          </div>
          <div className="item">
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
          </div>
          <div className="item">
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
          </div>
          <div className="item">
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
          </div>
        </div>
        <hr/>
        <div className="bottom">

          <div className="left">
            <h2>fiverr</h2>
            <span>© Fiverr International Ltd. 2023</span>
          </div>
          <div className="right">
            <div className="social">
              <img src={twitter} alt=""/>
              <img src={linkedin} alt=""/>
              <img src={facebook} alt=""/>
              <img src={pinterest} alt=""/>
              <img src={instagram} alt=""/>
            </div>
            <div className="link">
              <img src={language} alt=""/>
              <span>English</span>
            </div>
            <div className="link">
              <img src={coin} alt=""/>
              <span>USD</span>
            </div>
            <img src={accessibility} alt=""/>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
