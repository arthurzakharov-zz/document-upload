import { applyMiddleware, createStore, Middleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducer from "./root.reducer";

const middlewares: Middleware[] = [thunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export default createStore(reducer, applyMiddleware(...middlewares));
