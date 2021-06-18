import React from "react";
import classes from "./ListItems.module.css";
import Input from "../UI/FormElements/Input";

const ListItems = (props) => {
  let totalAmount = 0;
  let ListItems = props.items.map((item,i) => {
    totalAmount += item.amount;
    return (
      <div className={classes.ListItem} key={item.id}>
        <div className={classes.Desription}>
          <Input
            id={item.id}
            type="text"
            placeholder="Description"
            width="100%"
            value={item.itemDesc}
            changed={props.descriptionChanged}
            required
          />
        </div>
        <div className={classes.Qty}>
          <Input
            id={item.id}
            type="number"
            placeholder="Qty"
            width="100%"
            value={item.qty}
            changed={props.qtyChanged}
            required
          />
        </div>
        <div className={classes.Rate}>
          <Input
            id={item.id}
            type="number"
            placeholder="Rate"
            width="100%"
            value={item.rate}
            changed={props.rateChanged}
            required
          />
        </div>
        <div className={classes.Amount}>{item.amount}</div>
        {i>0?<div
          className={classes.Delete}
          onClick={() => {
            props.deleteClicked(item.id);
          }}
        >
          <i className="far fa-trash-alt"></i>
        </div>:null}
      </div>
    );
  });
  return (
    <React.Fragment>
      <div className={classes.ListItemsTable}>
        <div className={classes.TitleRow}>
          <div className={classes.Desription}>Description </div>
          <div className={classes.Qty}>Qty </div>
          <div className={classes.Rate}>Rate </div>
          <div className={classes.Amount}>Amount </div>
        </div>
        {ListItems}

        <div className={classes.BottomRow}>
          <div className={classes.AddItem} onClick={props.addClicked}>
            + Add List Item
          </div>
          <div className={classes.Total}>
            <div style={{ fontWeight: "600" }}>Total Amount:</div>
            <div>{totalAmount}</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default ListItems;
