import React from "react";
import classes from "./CompanyForm.module.css";
import Input from "../UI/FormElements/Input";

const CompanyForm = (props) => {
  let form = (
    <div className={classes.CompanyForm}>
      <div className={classes.Companytype}>From :</div>
      <Input type="text" placeholder="Your Company Name" width="100%" />
      <Input type="text" placeholder="Address" width="100%" />
      <Input type="text" placeholder="City Name" width="100%" />
    </div>
  );
  if (props.client) {
    form = (
      <div className={classes.CompanyForm}>
        <div className={classes.Companytype}>Bill TO :</div>
        <Input type="text" placeholder="Client's  Name" width="100%" />
        <Input type="email" placeholder="Client's  Email" width="100%" />
        <Input type="text" placeholder="Address" width="100%" />
        <Input type="text" placeholder="City Name" width="100%" />
      </div>
    );
  }
  return form;
};
export default CompanyForm;
