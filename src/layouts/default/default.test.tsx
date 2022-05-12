import { render, screen } from "@testing-library/react";
import DefaultLayout from "./default.layout";

function Header() {
  return <span>Header</span>;
}
function Main() {
  return <span>Main</span>;
}
function Footer() {
  return <span>Footer</span>;
}

const HEADER = "default-layout-header";
const MAIN = "default-layout-main";
const FOOTER = "default-layout-footer";

describe("DefaultLayout", () => {
  test("Snapshot", () => {
    const { container } = render(<DefaultLayout header={Header} main={Main} footer={Footer} />);
    expect(container.firstChild).toMatchSnapshot();
  });
  test("Each layout part is placed on correct place", () => {
    render(<DefaultLayout header={Header} main={Main} footer={Footer} />);
    expect(screen.getByTestId(HEADER)).toHaveTextContent("Header");
    expect(screen.getByTestId(MAIN)).toHaveTextContent("Main");
    expect(screen.getByTestId(FOOTER)).toHaveTextContent("Footer");
  });
});
