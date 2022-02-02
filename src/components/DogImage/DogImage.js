import React from "react";
import PropTypes from "prop-types";
import styles from "./DogImage.module.scss";

const DogImage = (props) => (
  <figure key={props.index} className={styles.DogImage} data-testid="DogImage">
    <button onClick={props.removeDog} className={styles.RemoveButton}>
      Remove
    </button>
    <img alt={props.figcaption} src={props.src} />
    <figcaption>{props.figcaption}</figcaption>
  </figure>
);

DogImage.propTypes = {};

DogImage.defaultProps = {};

export default DogImage;
