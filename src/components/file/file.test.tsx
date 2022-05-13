import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import File from "./file.component";

const FILE_NAME = "file-name";
const FILE_BUTTON = "file-button";

describe("File", () => {
  test("Screenshot", () => {
    const mockFn = jest.fn();
    const { container } = render(<File name="x" onClick={mockFn} />);
    expect(container.firstChild).toMatchSnapshot();
  });
  test("Name is passed correctly", () => {
    const mockFn = jest.fn();
    render(<File name="x" onClick={mockFn} />);
    expect(screen.getByTestId(FILE_NAME)).toHaveTextContent("x");
  });
  test("Focus on button and press enter", () => {
    const mockFn = jest.fn();
    render(<File name="x" onClick={mockFn} />);
    expect(screen.getByTestId(FILE_BUTTON)).not.toHaveFocus();
    userEvent.tab();
    expect(screen.getByTestId(FILE_BUTTON)).toHaveFocus();
    userEvent.keyboard("{Space}");
    userEvent.keyboard("{Enter}");
    expect(mockFn).toBeCalledTimes(1);
  });
  test("Click on button", () => {
    const mockFn = jest.fn();
    render(<File name="x" onClick={mockFn} />);
    userEvent.click(screen.getByTestId(FILE_BUTTON));
    expect(mockFn).toBeCalledTimes(1);
  });
});
