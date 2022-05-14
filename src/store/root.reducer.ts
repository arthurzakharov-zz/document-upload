import { combineReducers } from "redux";
import modalReducer, { ModalReducer } from "./modal/modal.reducer";

export interface RootReducer {
  modal: ModalReducer;
}

const rootReducer = combineReducers({
  modal: modalReducer,
});

export default rootReducer;
