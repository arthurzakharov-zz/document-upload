import { configureStore, Middleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import fileSlice from "./file/file.slice";
import modalSlice from "./modal/modal.slice";
import uiSlice from "./ui/ui.slice";

const MIDDLEWARES: Middleware[] = [];

const REDUCERS = {
  file: fileSlice,
  modal: modalSlice,
  ui: uiSlice,
};

if (process.env.NODE_ENV === "development") {
  MIDDLEWARES.push(logger);
}

const store = configureStore({
  reducer: REDUCERS,
  middleware: MIDDLEWARES,
  devTools: process.env.NODE_ENV !== "production",
});

export type StateType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;

export default store;
