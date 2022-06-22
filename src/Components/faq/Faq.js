import React from 'react';
import "./faq.css";
import icon from "../../assets/plusicon.png";

const Faq = ({question}) => {
  return (
    <div className='faq'>
        <p>{question}</p>
        <img src={icon} alt='icon'/>
    </div>
  )
}

export default Faq