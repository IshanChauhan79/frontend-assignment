import React from "react";
import classes from "./App.module.css";
import Header from "./components/Header/Header";
// import Invoices from "./components/Invoices/Invoices";
import NewInvoice from "./components/NewInvoice/NewInvoice";
function App() {
  return (
    <div className={classes.App}>
      <Header />
      {/* <Invoices /> */}
      <NewInvoice />
    </div>
  );
}

export default App;
