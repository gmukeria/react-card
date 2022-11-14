import React from "react";
import classes from "./Time.module.css";
import iconClock from "../../assets/icon-clock.svg";

const Time = props => {
  let date = new Date(props.createDate);

  return (
    <div className={classes.time}>
      <img src={iconClock} alt="clock icon" />
      <span>{date.getDay()} days ago</span>
    </div>
  );
};

export default Time;
