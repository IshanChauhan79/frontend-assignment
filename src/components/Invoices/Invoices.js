import React from "react";
import classes from "./Invoices.module.css";
import InvoiceContainer from "../UI/InvoiceContainer/InvoiceContainer";
import { dummyInvoiceData } from "../../data/newInvoice";
import CompanyForm from "../CompanyForm/CompanyForm";

const Invoices = (props) => {
  const invoiceData = [dummyInvoiceData, dummyInvoiceData];
  const allInvoices = invoiceData.map((data) => {
    const late = true;
    const InvoiceClass = [
      classes.Invoice,
      data.status === "Pending" && late ? classes.Late : null,
    ];
    return (
      <div className={InvoiceClass.join(" ")} key={Math.random().toString()}>
        <CompanyForm client>
          <div className={classes.ClientDetails}>{data.clientName}</div>
          <div className={classes.ClientDetails}>{data.clientAddress}</div>
          <div className={classes.ClientDetails}>{data.clientCity}</div>
          <div className={classes.ClientDetails}>{data.clientEmail}</div>
        </CompanyForm>
        <div>
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
