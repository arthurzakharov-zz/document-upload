import { configureStore, Middleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import imageSlice from "./image/image.slice";
import modalSlice from "./modal/modal.slice";
import uiSlice from "./ui/ui.slice";

const middlewares: Middleware[] = [thunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const store = configureStore({
  reducer: {
    image: imageSlice,
    modal: modalSlice,
    ui: uiSlice,
  },
  middleware: middlewares,
  devTools: true,
});

export type StateType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;

export default store;
