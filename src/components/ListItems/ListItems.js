import React from "react";
import classes from "./ListItems.module.css";
import Input from "../UI/FormElements/Input";

const ListItems = (props) => {
  return (
    <React.Fragment>
      <div className={classes.ListItemsTable}>
        <div className={classes.TitleRow}>
          <div className={classes.Desription}>Description </div>
          <div className={classes.Qty}>Qty </div>
          <div className={classes.Rate}>Rate </div>
          <div className={classes.Amount}>Amount </div>
        </div>
        <div className={classes.ListItem}>
          <div className={classes.Desription}>
            <Input type="text" placeholder="Description" width="100%" />
          </div>
          <div className={classes.Qty}>
            <Input type="text" placeholder="Qty" width="100%" />
          </div>
          <div className={classes.Rate}>
            <Input type="text" placeholder="Rate" width="100%" />
          </div>
          <div className={classes.Amount}>
            <Input type="text" placeholder="Amount" width="100%" />
          </div>
          <div className={classes.Delete}>D</div>
        </div>

        <div className={classes.BottomRow}>
          <div className={classes.AddItem}>+ Add List Item</div>
          <div className={classes.Total}>
            <div style={{ fontWeight: "600" }}>Total Amount:</div>
            <div>10000</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default ListItems;
