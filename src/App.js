import React from "react";
import classes from "./App.module.css";
import Header from "./components/Header/Header";
import Invoices from "./components/Invoices/Invoices";
import NewInvoice from "./components/NewInvoice/NewInvoice";
import Invoice from "./components/Invoice/Invoice";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className={classes.App}>
      <Header />
      <Switch>
        <Route path="/invoices" exact>
          <Invoices />
        </Route>
        <Route path="/invoices/:id">
          <Invoice />
        </Route>
        <Route path="/">
          <NewInvoice />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
