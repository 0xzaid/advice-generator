import React, { useState, useEffect } from 'react';
import { ReactComponent as PatternDivider } from "../assets/images/pattern-divider-desktop.svg"
import { ReactComponent as IconDice } from "../assets/images/icon-dice.svg"


const Card = () => {

  const [advice, setAdvice] = useState('');
  const [adviceId, setAdviceId] = useState('');

  const fetchAdvice = async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setAdvice(data.slip.advice);
      setAdviceId(data.slip.id);
    } catch (error) {
      console.error('Error fetching advice:', error);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  const handleIconClick = () => {
    fetchAdvice();
  };


  return (
    <>
      <div class="container">
        <div class="header">
          <p>ADVICE #{adviceId}</p>
        </div>
        <div class="advice-text">
          <p>"{advice}"</p>
        </div>
        <PatternDivider className="divider" />
        <div className='icon-dice-wrapper' onClick={handleIconClick}>
          <IconDice className="icon-dice" />
        </div>

      </div>


    </>
  )
}

export default Card;