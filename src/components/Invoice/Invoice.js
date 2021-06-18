import React from "react";
import classes from "./Invoice.module.css";
import InvoiceContainer from "../UI/InvoiceContainer/InvoiceContainer";
import CompanyForm from "../CompanyForm/CompanyForm";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

const Invoice = (props) => {
  const param = useParams();
  const invoiceData = useSelector((state) => state.invoices);

  let invoiceIndex = invoiceData.findIndex((el) => el.id === param.id);

  const invoice = invoiceData[invoiceIndex];

  const ListItems = invoice.listItems.map((item) => {
    return (
      <div className={classes.ListItem} key={item.id}>
        <div className={classes.Desription}>{item.itemDesc}</div>
        <div className={classes.Qty}>{item.qty}</div>
        <div className={classes.Rate}>{item.rate}</div>
        <div className={classes.Amount}>{item.amount}</div>
      </div>
    );
  });
  return (
    <InvoiceContainer>
      <div className={classes.Invoice}>
        <div className={classes.Title}>INVOICE</div>
        <div className={classes.Company}>
          <CompanyForm>
            <div>{invoice.myCompany}</div>
            <div>{invoice.myAddress}</div>
            <div>{invoice.myCity}</div>
          </CompanyForm>
          <CompanyForm client>
            <div>{invoice.clientName}</div>
            <div>{invoice.clientAddress}</div>
            <div>{invoice.clientCity}</div>
            <div>{invoice.clientEmail}</div>
          </CompanyForm>
        </div>
        <div className={classes.ListItemsTable}>
          <div className={classes.TitleRow}>
            <div className={classes.Desription}>Description </div>
            <div className={classes.Qty}>Qty </div>
            <div className={classes.Rate}>Rate </div>
            <div className={classes.Amount}>Amount </div>
          </div>
          {ListItems}
          <div className={classes.BottomRow}>
            <div className={classes.Total}>
              <div style={{ fontWeight: "600" }}>Total Amount:</div>
              <div>{invoice.totalAmount}</div>
            </div>
          </div>
        </div>

        <div className={classes.Payment}>
          <div style={{ textDecoration: "underline" }}>Payment Method: </div>
          <div>{invoice.payment}</div>
        </div>
        <div className={classes.Payment}>
          <div style={{ textDecoration: "underline" }}>Status: </div>
          <div
            style={{
              color: invoice.status === "Pending" ? "red" : "black",
            }}
          >
            {invoice.status}
          </div>
        </div>

        <div>
          <div className={classes.Notes}>Notes: </div>
          <div className={classes.NotesText}>{invoice.notes}</div>
        </div>
      </div>
    </InvoiceContainer>
  );
};
export default Invoice;
