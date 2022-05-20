import { combineReducers } from "redux";
import imageReducer, { ImageReducer } from "./image/image.reducer";
import modalReducer, { ModalReducer } from "./modal/modal.reducer";

export interface RootReducer {
  modal: ModalReducer;
  image: ImageReducer;
}

const rootReducer = combineReducers({
  modal: modalReducer,
  image: imageReducer,
});

export default rootReducer;
