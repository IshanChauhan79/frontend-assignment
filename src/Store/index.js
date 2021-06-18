import { configureStore } from "@reduxjs/toolkit";
import { invoiceReducers } from "./invoice-slice";

const store = configureStore({
  reducer:  invoiceReducers,
});

// console.log(torrentSlice.actions)

export default store;
