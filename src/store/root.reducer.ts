import { combineReducers } from "redux";
import imageReducer, { ImageReducer } from "./image/image.reducer";
import modalReducer, { ModalReducer } from "./modal/modal.reducer";
import uiReducer, { UiReducer } from "./ui/ui.reducer";

export interface RootReducer {
  image: ImageReducer;
  modal: ModalReducer;
  ui: UiReducer;
}

const rootReducer = combineReducers({
  image: imageReducer,
  modal: modalReducer,
  ui: uiReducer,
});

export default rootReducer;
