import React from 'react';
import snowflake2 from '../img/snowflake-2.png';

function ShopNow() {
  return (
    <section id="shop-now-banner">
      <p className="discount-code">Enter code <span>HUMDAY18</span> at checkout</p>
      <div className="shop-now">SHOP NOW</div>
      <p className="already-a-member">Already a HUM member? <nobr>Check your box for a special holiday gift.</nobr></p>
      <img src={snowflake2} alt="snowflake"/>
    </section>
  )
}

export default ShopNow;
