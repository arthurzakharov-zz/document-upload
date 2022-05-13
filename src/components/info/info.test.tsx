import { render } from "@testing-library/react";
import Info from "./info.component";

describe("Info", () => {
  test("Snapshot", () => {
    const { container } = render(<Info />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
