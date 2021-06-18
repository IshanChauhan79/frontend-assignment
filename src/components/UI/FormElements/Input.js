import React from 'react';
import classes from './Input.module.css';

const Input =(props)=>{
    
    let id=props.id;    
    let input=null;
    if(props.type==="text" || props.type==="email"  ){
        input=<input id={props.id} onChange={(event)=>{props.changed(event,id)}} type={props.type} placeholder={props.placeholder} className={classes.Text} style={{"width":props.width}} value={props.value} required={props.required}/>
    }
    if(props.type==="number" ){
        input=<input id={props.id} onChange={(event)=>{props.changed(event,id)}} type={props.type} placeholder={props.placeholder}  min="0" className={classes.Text} style={{"width":props.width}} value={props.value} required={props.required}/>
    }
    if(props.type==="textarea"){
        input=<textarea  onChange={(event)=>{props.changed(event)}} type={props.type} placeholder={props.placeholder} className={classes.Text} style={{"width":props.width}}  />
    }
    return input;
}
export default Input;