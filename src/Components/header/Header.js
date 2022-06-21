import React from 'react';
import "./header.css";
import gifimg from "../../assets/headerimggif.gif";
import ellipse from "../../assets/Group357.png";
import InfluncerButton from '../InfluncerButton/InfluncerButton';

const Header = () => {
  return (
    <div className="header">
        <div className="header_content">
          <h2>YOU CREATE CONTENTS<br />WE BRING BRANDS</h2>
          <div className="header_content_join">
            {/* <button type="button">Join as Influncer</button> */}
            <InfluncerButton text={"Join as Influencer"}/>
            <div className="header_content_demo">
              <img src={ellipse} alt="ellipse" />
              <p>Watch demo</p>
            </div>
          </div>
        </div>
        <div className="header_image">
          <img src={gifimg} alt="gif" />
        </div>
    </div>
  )
}

export default Header;