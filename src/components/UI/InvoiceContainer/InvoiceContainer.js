import React from 'react';
import classes from './InvoiceContainer.module.css'

//add common styling to most of the components as parent 
const InvoiceContainer = (props)=>(
    <div className={classes.InvoiceContainer}>
        {props.children}
    </div>
)
export default InvoiceContainer;