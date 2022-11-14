import React from "react";

import Author from "../Author/Author";
import Amount from "../Amount/Amount";
import Time from "../Time/Time";
import mainImage from "../../assets/image-equilibrium.jpg";

// const images = importAll(
//   require.context("../../assets", false, /\.(png|jpe?g|svg)$/)
// );

import classes from "./Card.module.css";

const Card = props => {
  return (
    <div className={classes.card_wrapper}>
      <div className={classes.card_image}>
        <img src={mainImage} alt="equilibrium" />
      </div>
      <div className={classes.card_details}>
        <div className={classes.card_text}>
          <a href="#">
            <h1>{props.data.card_title}</h1>
          </a>
          <p>{props.data.card_desc}</p>
        </div>
        <div className={classes.card_stats}>
          <Amount amount={props.data.amount} />
          <Time createDate={props.data.create_date} />
        </div>
      </div>

      <Author name={props.data.author_name} avatar={props.data.author_avatar} />
    </div>
  );
};

export default Card;
