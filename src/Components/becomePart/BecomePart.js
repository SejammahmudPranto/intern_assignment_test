import React from 'react'
import InfluncerButton from '../InfluncerButton/InfluncerButton'
import "./becomePart.css";
import thumbnail from "../../assets/thumbnail.png";
import onlyLogo from "../../assets/onlyLogo.png";
//import bg from "../../assets/shapeCustom.png";

const BecomePart = () => {
  return (
    <div>
        <div className='become-part'>
            <h2>Become a part of HypeScout</h2>
            <InfluncerButton text={"Join Now"}/>
        </div>
        <div className='influencers-say'>
            <div className='logo1'>
                <img src={onlyLogo} alt='logo'/>
            </div>
            <div className="influencers-say_content">
                <p>What Influencers say about HypeScout</p>
                <img src={thumbnail} alt="thumbnail"/>
            </div>
        </div>
    </div>
  )
}

export default BecomePart