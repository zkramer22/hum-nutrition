import React from 'react';
import logo from '../img/hum-logo.png';
import truck from '../img/truck.png';
import phone from '../img/phone.png';

function Nav() {
  return (
    <nav>
      <div id="top">
        <div className="container">
          <div className="container-left">
            <div>Available at HUM & SEPHORA</div>
          </div>
          <div className="container-right">
            <div id="shipping"><img id="truck" src={truck} alt="truck icon"/> Free shipping on orders over $50</div>
            <div id="phone-number"><img id="phone" src={phone} alt="phone icon"/>(888) 647 8880</div>
            <div id="free-trial"><div id="rhomb"></div><span>FREE TRIAL + S&H</span></div>
            <div id="login">Login</div>
          </div>
        </div>
      </div>
      <div id="bottom">
        <div className="container">
          <div className="container-left">
            <div className="img-container">
              <img src={logo} alt="HUM Nutrition - Beauty starts from within"/>
            </div>
          </div>
          <div className="container-right">
            <div id="nav-links">
              <span>PRODUCTS</span>
              <span>OUR NUTRITIONISTS</span>
              <span>BLOG</span>
              <span>GET STARTED</span>
              <span>BAG</span>
            </div>
            <div id="hamburger-mock">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
