import React from "react";

import classes from "./Amount.module.css";

import iconEthereum from "../../assets/icon-ethereum.svg";

const Amount = props => {
  return (
    <div className={classes.amount}>
      <img src={iconEthereum} alt="ethereum icon" />
      <span>{props.amount} ETH</span>
    </div>
  );
};

export default Amount;
