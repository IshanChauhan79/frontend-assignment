import React from 'react';
import classes from './InvoiceContainer.module.css'

const InvoiceContainer = (props)=>(
    <div className={classes.InvoiceContainer}>
        {props.children}
    </div>
)
export default InvoiceContainer;