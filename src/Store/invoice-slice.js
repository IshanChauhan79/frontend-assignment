import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./invoice-initial-state";
const invoiceSlice = createSlice({
  name: "Invoice-Slice",
  initialState: initialState,
  reducers: {
    addInvoice(state, action) {
      const newInvoice = action.payload.data;
      let totalAmount = 0;
      for (let item of newInvoice.listItems) {
        totalAmount = totalAmount + item.amount;
      }
      newInvoice.id = Math.random().toString();
      newInvoice.totalAmount = totalAmount;
      state.invoices = [...state.invoices, newInvoice];
      console.log(state.invoices);
    },
  },
});
export const invoiceReducers = invoiceSlice.reducer;

export const invoiceActions = invoiceSlice.actions;
