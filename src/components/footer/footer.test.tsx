import { render } from "@testing-library/react";
import Footer from "./footer.component";
import { companyName } from "./footer.utils";

describe("Footer", () => {
  test("companyName", () => {
    const year = new Date().getFullYear();
    expect(companyName("x")).toEqual(`© ${year} x`);
  });
  test("Screenshot", () => {
    const { container } = render(<Footer />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
