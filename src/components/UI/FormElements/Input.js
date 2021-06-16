import React from 'react';
import classes from './Input.module.css';

const Input =(props)=>{
    let input=null;
    if(props.type==="text"){
        input=<input type={props.type} placeholder={props.placeholder} className={classes.Text} style={{"width":props.width}} />
    }
    if(props.type==="textarea"){
        input=<textarea type={props.type} placeholder={props.placeholder} className={classes.Text} style={{"width":props.width}} />
    }
    return input;
}
export default Input;