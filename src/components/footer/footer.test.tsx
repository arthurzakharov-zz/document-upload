import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import Footer from "./footer.component";
import { companyName } from "./footer.utils";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("Footer", () => {
  test("companyName", () => {
    const year = new Date().getFullYear();
    expect(companyName("x")).toEqual(`© ${year} x`);
  });
  test("Screenshot", () => {
    const initialState = {};
    const store = mockStore(initialState);
    const { container } = render(
      <Provider store={store}>
        <Footer />
      </Provider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
