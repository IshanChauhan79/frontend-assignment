import React, { useState } from "react";
import classes from "./NewInvoice.module.css";
import InvoiceContainer from "../UI/InvoiceContainer/InvoiceContainer";
import CompanyForm from "../CompanyForm/CompanyForm";
import ListItems from "../ListItems/ListItems";
import DateInput from "../UI/FormElements/DateInput";
import DropDownInput from "../UI/FormElements/DropDownInput";
import Input from "../UI/FormElements/Input";
import Button from "../UI/FormElements/Button";

import { dummyInvoiceData, newListItem } from "../../data/newInvoice";

const NewInvoice = (props) => {
  const [invoiceForm, setInvoiceForm] = useState(dummyInvoiceData);

  const myCompanyChanged = (event) => {
    setInvoiceForm((prev) => ({ ...prev, myCompany: event.target.value }));
  };
  const myAddressChanged = (event) => {
    setInvoiceForm((prev) => ({ ...prev, myAddress: event.target.value }));
  };
  const myCityChanged = (event) => {
    setInvoiceForm((prev) => ({ ...prev, myCity: event.target.value }));
  };
  const clientNameChanged = (event) => {
    setInvoiceForm((prev) => ({ ...prev, clientName: event.target.value }));
  };
  const clientAddressChanged = (event) => {
    setInvoiceForm((prev) => ({ ...prev, clientAddress: event.target.value }));
  };
  const clientCityChanged = (event) => {
    setInvoiceForm((prev) => ({
      ...prev,
      clientCityAddress: event.target.value,
    }));
  };
  const clientEmailChanged = (event) => {
    setInvoiceForm((prev) => ({
      ...prev,
      clientEmailAddress: event.target.value,
    }));
  };

  const invoiceDateChanged = (event) => {
    setInvoiceForm((prev) => ({ ...prev, invoiceDate: event.target.value }));
  };
  const dueDateChanged = (event) => {
    setInvoiceForm((prev) => ({ ...prev, dueDate: event.target.value }));
  };
  const paymentChanged = (event) => {
    setInvoiceForm((prev) => ({ ...prev, payment: event.target.value }));
  };
  const statusChanged = (event) => {
    setInvoiceForm((prev) => ({ ...prev, status: event.target.value }));
  };
  const notesChanged = (event) => {
    setInvoiceForm((prev) => ({ ...prev, notes: event.target.value }));
  };
  const descriptionChanged = (event, id) => {
    let itemList = [...invoiceForm.listItems];
    let itemIndex = itemList.findIndex((el) => el.id === id);
    itemList[itemIndex] = {
      ...itemList[itemIndex],
      itemDesc: event.target.value,
    };
    setInvoiceForm((prev) => ({ ...prev, listItems: itemList }));
  };
  const rateChanged = (event, id) => {
    let itemList = [...invoiceForm.listItems];
    let itemIndex = itemList.findIndex((el) => el.id === id);
    itemList[itemIndex] = { ...itemList[itemIndex], rate: event.target.value,amount:itemList[itemIndex].qty*event.target.value };
    setInvoiceForm((prev) => ({ ...prev, listItems: itemList }));
  };
  const qtyChanged = (event, id) => {
    let itemList = [...invoiceForm.listItems];
    let itemIndex = itemList.findIndex((el) => el.id === id);
    itemList[itemIndex] = { ...itemList[itemIndex], qty: event.target.value,amount:itemList[itemIndex].rate*event.target.value };
    setInvoiceForm((prev) => ({ ...prev, listItems: itemList }));
  };
  const delelteItemClicked = (id) => {
    let itemList = invoiceForm.listItems.filter((item) => item.id !== id);
    setInvoiceForm((prev) => ({ ...prev, listItems: itemList }));
  };
  const addItemClicked = () => {
    let itemList = [...invoiceForm.listItems];
    itemList.push({ ...newListItem, id: Math.random().toString() });
    setInvoiceForm((prev) => ({ ...prev, listItems: itemList }));
  };
  console.log(invoiceForm);
  return (
    <InvoiceContainer>
      <div className={classes.NewInvoice}>
        <div className={classes.Title}>INVOICE</div>
        <form>
          <div className={classes.Company}>
            <CompanyForm>
              <Input
                type="text"
                placeholder="Your Company Name"
                width="100%"
                changed={myCompanyChanged}
                required
              />
              <Input
                type="text"
                placeholder="Address"
                width="100%"
                changed={myAddressChanged}
                required
              />
              <Input
                type="text"
                placeholder="City Name"
                width="100%"
                changed={myCityChanged}
                required
              />
            </CompanyForm>
            <CompanyForm client>
              <Input
                type="text"
                placeholder="Client's  Name"
                width="100%"
                changed={clientNameChanged}
                required
              />
              <Input
                type="text"
                placeholder="Address"
                width="100%"
                changed={clientAddressChanged}
                required
              />
              <Input
                type="text"
                placeholder="City Name"
                width="100%"
                changed={clientCityChanged}
              />
              <Input
                type="email"
                placeholder="Client's  Email"
                width="100%"
                changed={clientEmailChanged}
                required
              />
            </CompanyForm>
          </div>
          <div className={classes.Company}>
            <DateInput changed={invoiceDateChanged} required>
              Invoice Date:{" "}
            </DateInput>
            <DateInput changed={dueDateChanged} required>
              Due Date:{" "}
            </DateInput>
          </div>

          <ListItems
            items={invoiceForm.listItems}
            totalamount={invoiceForm.totalAmount}
            descriptionChanged={descriptionChanged}
            rateChanged={rateChanged}
            qtyChanged={qtyChanged}
            deleteClicked={delelteItemClicked}
            addClicked={addItemClicked}
            
          />
          <div className={classes.Payment}>
            <DropDownInput
              label="Payment Method: "
              name="Payment"
              options={["Cash", "UPI", "PAYTM", "Credit Card", "Debit Cared"]}
              changed={paymentChanged}
            />
          </div>
          <div className={classes.Payment}>
            <DropDownInput
              label="Status "
              name="Status: "
              options={["Paid", "Pending"]}
              changed={statusChanged}
            />
          </div>
          <div className={classes.Notes}>
            <div className={classes.Notes}>Notes</div>
            <Input
              type="textarea"
              placeholder="Add notes...."
              width="500px"
              changed={notesChanged}
            />
          </div>
          <div className={classes.SubmitButton}>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </InvoiceContainer>
  );
};
export default NewInvoice;
