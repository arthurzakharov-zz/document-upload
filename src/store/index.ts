import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import reducer from "./root.reducer";

const logger = createLogger({
  level: "log",
});

export default createStore(reducer, applyMiddleware(...[thunk, logger]));
