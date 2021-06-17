import React from "react";
import classes from "./CompanyForm.module.css";
import Input from "../UI/FormElements/Input";

const CompanyForm = (props) => {
  let form = (
    <div className={classes.CompanyForm}>
      <div className={classes.Companytype}>From :</div>
      {props.children}
    </div>
  );
  if (props.client) {
    form = (
      <div className={classes.CompanyForm}>
        <div className={classes.Companytype}>Bill TO :</div>
        {props.children}

      </div>
    );
  }
  return form;
};
export default CompanyForm;
