import React, { useState } from 'react';

function Usestatehook() {
  const [countincrease, setCountIncrease] = useState(0);
  const [countdecrease, setCountDecrease] = useState(0);


  const handleClick = () => {
    setCountIncrease(countincrease + 1);
  }

  const handleClick1 = () => {
    setCountDecrease(countdecrease- 1);
  }


  return (
    <div className="container">
      <p className="count">You clicked {countincrease} times</p>
      <p className="count">You clicked {countdecrease} times</p>
      <button className="increase-btn" onClick={handleClick}>Click me to Increase Count</button>
      <button className="decrease-btn" onClick={handleClick1}>Click me to Decrease Count</button>
    </div>
  );
}

export default Usestatehook;
