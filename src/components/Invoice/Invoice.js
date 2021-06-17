import React from "react";
import classes from "./Invoice.module.css";
import InvoiceContainer from "../UI/InvoiceContainer/InvoiceContainer";
import CompanyForm from "../CompanyForm/CompanyForm";
import { dummyInvoiceData } from "../../data/newInvoice";

const Invoice = (props) => {
  const ListItems = dummyInvoiceData.listItems.map((item) => {
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
            <div>{dummyInvoiceData.myCompany}</div>
            <div>{dummyInvoiceData.myAddress}</div>
            <div>{dummyInvoiceData.myCity}</div>
          </CompanyForm>
          <CompanyForm client>
            <div>{dummyInvoiceData.clientName}</div>
            <div>{dummyInvoiceData.clientAddress}</div>
            <div>{dummyInvoiceData.clientCity}</div>
            <div>{dummyInvoiceData.clientEmail}</div>
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
              <div>{dummyInvoiceData.totalAmount}</div>
            </div>
          </div>
        </div>

        <div className={classes.Payment}>
          <div style={{ textDecoration: "underline" }}>Payment Method: </div>
          <div>{dummyInvoiceData.payment}</div>
        </div>
        <div className={classes.Payment}>
          <div style={{ textDecoration: "underline" }}>Status: </div>
          <div
            style={{
              color: dummyInvoiceData.status === "Pending" ? "red" : "black",
            }}
          >
            {dummyInvoiceData.status}
          </div>
        </div>

        <div>
          <div className={classes.Notes}>Notes: </div>
          <div className={classes.NotesText}>{dummyInvoiceData.notes}</div>
        </div>
      </div>
    </InvoiceContainer>
  );
};
export default Invoice;
