import React from 'react';
import classes from './Header.module.css';

const Header =()=>{
    return(
        <header className={classes.Header} >
            <div >Invoice</div>
            <div className={classes.Active} >New Invoice</div>
        </header>
    )
}
export default Header;