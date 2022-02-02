import React from "react";
import PropTypes from "prop-types";
import styles from "./Form.module.scss";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

function Form(props) {
  function submitForm() {
    console.log(props.breedData);
  }

  // function handleChange(event) {
  //   const { dog } = event.target;
  //   this.setState({ dog: dog });
  // }

  return (
    <div>
      <form className="Form" data-testid="Form">
        <Autocomplete
          id="dog-selector"
          className="dogSelector"
          options={props.breedData}
          sx={{ height: "100%" }}
          onInputChange={props.handleSelect}
          renderInput={(params) => (
            <TextField {...params} label="Select a dog breed" />
          )}
        />
        <button
          type="button"
          value="Submit"
          onClick={props.submitForm}
          className="submitButton"
        >
          Submit
        </button>
        <button
          type="button"
          value="Random"
          onClick={props.getRandom}
          className="submitButton"
        >
          Random
        </button>
      </form>
    </div>
  );
}

Form.propTypes = {};

Form.defaultProps = {};

export default Form;
