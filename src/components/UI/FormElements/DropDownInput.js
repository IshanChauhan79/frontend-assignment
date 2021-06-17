import React from "react";
import classes from "./DropDownInput.module.css";

const DropDownInput = (props) => {
    let options =props.options.map(opt=><option key={opt} value={opt}>{opt}</option>)
  return (
    <div>
      <label className={classes.Label} htmlFor={props.name}>{props.label}</label>

      <select name={props.name} className={classes.DropDownInput} onChange={(event)=>{props.changed(event)}} >
        {options}
      </select>
    </div>
  );
};
export default DropDownInput;
