import React from "react";
import classes from "./NewInvoice.module.css";
import InvoiceContainer from "../UI/InvoiceContainer/InvoiceContainer";
import CompanyForm from "../CompanyForm/CompanyForm";
import ListItems from "../ListItems/ListItems";
import DateInput from "../UI/FormElements/DateInput";
import DropDownInput from "../UI/FormElements/DropDownInput";
import Input from "../UI/FormElements/Input";
import Button from "../UI/FormElements/Button";

const NewInvoice = (props) => (
  <InvoiceContainer>
    <div className={classes.NewInvoice}>
      <div className={classes.Title}>INVOICE</div>
      <form>
        <div className={classes.Company}>
          <CompanyForm />
          <CompanyForm client />
        </div>
        <div className={classes.Company}>
          <DateInput>Invoice Date: </DateInput>
          <DateInput>Due Date: </DateInput>
        </div>

        <ListItems />
        <div className={classes.Payment}>
          <DropDownInput
            label="Payment Method: "
            name="Payment"
            options={["Cash", "UPI", "PAYTM", "Credit Card", "Debit Cared"]}
          />
        </div>
        <div className={classes.Notes}>
          <div className={classes.Notes}>Notes</div>
          <Input type="textarea" placeholder="Add notes...." width="500px" />
        </div>
        <div className={classes.SubmitButton}>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  </InvoiceContainer>
);
export default NewInvoice;
