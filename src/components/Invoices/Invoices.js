import React from "react";
import classes from "./Invoices.module.css";
import InvoiceContainer from "../UI/InvoiceContainer/InvoiceContainer";
import { useHistory, useLocation } from "react-router";
import { useSelector } from "react-redux";
import CompanyForm from "../CompanyForm/CompanyForm";

// return list of all invoices--------------------------------------------------------------------
const Invoices = (props) => {
  const location = useLocation();
  const history = useHistory();

  //get data from redux
  const invoiceData = useSelector((state) => state.invoices);

  // change route if any invoice is clicked
  const onclickInvoice = (id) => {
    history.push(location.pathname + "/" + id);
  };

  const allInvoices = invoiceData.map((data) => {
    // check if due date is less then today's date , then show the invoice in red box as a warning
    const date = new Date(data.dueDate);
    const todaysDate = new Date();
    let late = date < todaysDate;
    let lateColor = data.status === "Pending" && late;
    const InvoiceClass = [classes.Invoice, lateColor ? classes.Late : null];
    return (
      <div
        className={InvoiceClass.join(" ")}
        key={data.id}
        onClick={() => onclickInvoice(data.id)}
      >
        <CompanyForm client>
          <div className={classes.ClientDetails}>{data.clientName}</div>
          <div className={classes.ClientDetails}>{data.clientAddress}</div>
          <div className={classes.ClientDetails}>{data.clientCity}</div>
          <div className={classes.ClientDetails}>{data.clientEmail}</div>
        </CompanyForm>
        <div className={classes.Paymentstatus}>
          <div>Invoice Date: {data.invoiceDate}</div>
          <div>Due Date: {data.dueDate}</div>
        </div>
        <div className={classes.Paymentstatus}>
          <div className={classes.Amount}>Rs {data.totalAmount}</div>
          <div
            style={{
              fontWeight: lateColor ? "700" : "500",
              color: lateColor ? "red" : "var(--clr-blue-600)",
            }}
          >
            {data.status}
          </div>
        </div>
      </div>
    );
  });

  return <InvoiceContainer>{allInvoices}</InvoiceContainer>;
};
export default Invoices;
