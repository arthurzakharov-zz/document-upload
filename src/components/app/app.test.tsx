import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from "./app.component";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("App", () => {
  test("Snapshot", () => {
    const initialState = {
      modal: {
        isOpened: false,
      },
    };
    const store = mockStore(initialState);
    const { container } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
