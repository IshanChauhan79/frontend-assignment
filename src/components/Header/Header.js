import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={classes.Header}>
      <NavLink to="/" activeClassName={classes.Active} exact>
        New Invoice
      </NavLink>
      <NavLink to="/invoices" activeClassName={classes.Active}>
        Invoices
      </NavLink>
    </header>
  );
};
export default Header;
