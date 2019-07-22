import React from 'react';
import PriceTier from './PriceTier';
import orangeBox from '../img/orange-box.png';

function MoreHum() {
  return (
    <section id="more-hum">
      <div className="container">
        <h3>MORE HUM, MORE SAVINGS</h3>
        <PriceTier save='58' op1='3' op2='12'/>
        <PriceTier save='52' op1='3' op2='3'/>
        <PriceTier save='44' op1='3' op2='Month to'/>

        <div id="orange-box" className="img-container">
          <img src={orangeBox} alt="box of hum products"/>
        </div>
      </div>
    </section>
  )
}

export default MoreHum;
