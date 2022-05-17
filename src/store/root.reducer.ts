import { combineReducers } from "redux";
import fileReducer, { FileReducer } from "./file/file.reducer";
import modalReducer, { ModalReducer } from "./modal/modal.reducer";

export interface RootReducer {
  modal: ModalReducer;
  file: FileReducer;
}

const rootReducer = combineReducers({
  modal: modalReducer,
  file: fileReducer,
});

export default rootReducer;
