import React from "react";

import classes from "./Author.module.css";

import imageAvatar from "../../assets/image-avatar.png";

const Author = props => {
  return (
    <div className={classes.author}>
      <div className={classes.avater}>
        <img src={imageAvatar} alt="owner image" />
      </div>
      <p>
        Creation of <a href="#">{props.name}</a>
      </p>
    </div>
  );
};

export default Author;
