import { configureStore, Middleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import logger from "redux-logger";
import thunk from "redux-thunk";
import imageSlice from "./image/image.slice";
import modalSlice from "./modal/modal.slice";
import uiSlice from "./ui/ui.slice";

const persistConfig = {
  key: "document-upload",
  storage,
  blacklist: ["modal", "ui"],
};

const reducers = combineReducers({ image: imageSlice, modal: modalSlice, ui: uiSlice });

const persistedReducer = persistReducer(persistConfig, reducers);

const middlewares: Middleware[] = [thunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const store = configureStore({
  reducer: persistedReducer,
  middleware: middlewares,
  devTools: process.env.NODE_ENV !== "production",
});

export type StateType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;

export default store;
