import { render } from "@testing-library/react";
import Header from "./header.component";

describe("Header", () => {
  test("Screenshot", () => {
    const { container } = render(<Header />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
