import { configureStore } from "@reduxjs/toolkit";
import { invoiceReducers } from "./invoice-slice";

const store = configureStore({
  reducer: invoiceReducers,
});

export default store;
