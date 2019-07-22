import React from 'react';
import hero from '../img/hero.png';

function Hero() {
  return (
    <div id="hero-container">
      <div className="img-container">
        <img id="hero" src={hero} alt="hero"/>
      </div>
      <div className="hero-copy">
        <h1>SAVE 50%<br/>OR MORE</h1>
        <h2>SITEWIDE</h2>
        <div className="shop-now">SHOP NOW</div>
        <p className="discount-code">Enter code <span>HUMDAY18</span> at checkout</p>
      </div>
    </div>
  )
}

export default Hero;
