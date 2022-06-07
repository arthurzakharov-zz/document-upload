import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FileItem from "./file-item.component";

const FILE_ITEM_NAME = "file-item-name";
const FILE_ITEM_BUTTON = "file-item-button";

describe("FileItem", () => {
  test("Screenshot", () => {
    const mockFn = jest.fn();
    const { container } = render(<FileItem name="x" onClick={mockFn} />);
    expect(container.firstChild).toMatchSnapshot();
  });
  test("Name is passed correctly", () => {
    const mockFn = jest.fn();
    render(<FileItem name="x" onClick={mockFn} />);
    expect(screen.getByTestId(FILE_ITEM_NAME)).toHaveTextContent("x");
  });
  test("Focus on button and press enter", () => {
    const mockFn = jest.fn();
    render(<FileItem name="x" onClick={mockFn} />);
    expect(screen.getByTestId(FILE_ITEM_BUTTON)).not.toHaveFocus();
    userEvent.tab();
    expect(screen.getByTestId(FILE_ITEM_BUTTON)).toHaveFocus();
    userEvent.keyboard("{Space}");
    userEvent.keyboard("{Enter}");
    expect(mockFn).toBeCalledTimes(1);
  });
  test("Click on button", () => {
    const mockFn = jest.fn();
    render(<FileItem name="x" onClick={mockFn} />);
    userEvent.click(screen.getByTestId(FILE_ITEM_BUTTON));
    expect(mockFn).toBeCalledTimes(1);
  });
});
