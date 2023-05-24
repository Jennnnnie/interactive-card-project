import React from "react";
import { bigBackground, frontBG, backBG, cardLogo } from "./imports";
import "./cards.css";

const Cards = () => {
  return (
    <>
      <div className="interative-cards section">
        <div className="interactive-cards_container">
          <img
            src={bigBackground}
            alt="gradient-background"
            className="big-background"
          />
          <div className="interactive-cards_card-front">
            <img src={cardLogo} alt="card-logo" className="card-logo" />
            <img src={frontBG} alt="card-front" className="card-front-bg" />
            <span className="card-number">0000 0000 0000 0000</span>
            <span className="cardholder-name">Jane Appleseed</span>
            <span className="card-expiry-date">00 / 00</span>
          </div>
          <div className=" interactive-cards_card-back">
            <img src={backBG} alt="card-back" className="card-back-bg" />
            <span className="card-back-cvc">000</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
