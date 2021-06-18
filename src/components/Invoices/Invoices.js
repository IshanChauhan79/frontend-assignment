import React from "react";
import classes from "./Invoices.module.css";
import InvoiceContainer from "../UI/InvoiceContainer/InvoiceContainer";
import { useHistory, useLocation } from "react-router";
import { useSelector } from "react-redux";
import CompanyForm from "../CompanyForm/CompanyForm";

const Invoices = (props) => {
  const location = useLocation();
  const history = useHistory();
  const invoiceData = useSelector((state) => state.invoices);
  console.log(invoiceData);
  const onclickInvoice = (id) => {
    history.push(location.pathname + "/" + id);
  };

  const allInvoices = invoiceData.map((data) => {
    const date=new Date(data.dueDate);
    const todaysDate=new Date();
    let late=date<todaysDate   
    const InvoiceClass = [
      classes.Invoice,
      data.status === "Pending" && late ? classes.Late : null,
    ];
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
          <div className={classes.Status}>{data.status}</div>
        </div>
      </div>
    );
  });

  return <InvoiceContainer>{allInvoices}</InvoiceContainer>;
};
export default Invoices;
