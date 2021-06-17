import React, { useRef } from "react";
import classes from "./DateInput.module.css";

const DateInput = (props) => {
  return (
    <div>
      {props.children}
      <input
        type="date"
        required={props.required}
        className={classes.Date}
        onChange={(event) => {
          props.changed(event);
        }}
      />
    </div>
  );
};
export default DateInput;
