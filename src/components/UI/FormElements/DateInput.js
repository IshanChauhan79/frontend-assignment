import React from "react";
import classes from "./DateInput.module.css";

const DateInput = (props) => {
  return (
    <div>
      {props.children}
      <input type="date" className={classes.Date} />
    </div>
  );
};
export default DateInput;
