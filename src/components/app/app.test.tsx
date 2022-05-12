import { render } from "@testing-library/react";
import App from "./app.component";

describe("App", () => {
  test("Snapshot", () => {
    const { container } = render(<App />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
