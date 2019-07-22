import React from 'react';
import snowflake from '../img/snowflake.png';

function PriceTier({save, op1, op2}) {
  return (
    <div className="price-tier-container">
      <div className="save">
        <div className="img-container">
          <img src={snowflake} alt="snowflake"/>
        </div>
        <span>SAVE {save}%</span>
        <div className="img-container">
          <img src={snowflake} alt="snowflake"/>
        </div>
      </div>
      <p>Buy {op1} + {op2} Month Plan</p>
    </div>
  )
}

export default PriceTier;
