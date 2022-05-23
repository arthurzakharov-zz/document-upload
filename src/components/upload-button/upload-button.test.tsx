import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { uploadButton } from "./upload-button.utils";
import UploadButton from "./upload-button.component";

const UPLOAD_BUTTON = "upload-button";
const UPLOAD_BUTTON_UPLOAD = "upload-button-upload";
const UPLOAD_BUTTON_CHECK = "upload-button-check";

describe("UploadButton", () => {
  test("uploadButton is not loaded", () => {
    expect(uploadButton(false)).toEqual("upload-button");
  });
  test("uploadButton is loaded", () => {
    expect(uploadButton(true)).toEqual("upload-button upload-button--loaded");
  });
  test("Snapshot is in not loaded state", () => {
    const mockFn = jest.fn();
    const { container } = render(<UploadButton loaded={false} multiple onClick={mockFn} />);
    expect(container.firstChild).toMatchSnapshot();
  });
  test("Snapshot is in loaded state", () => {
    const mockFn = jest.fn();
    const { container } = render(<UploadButton loaded multiple onClick={mockFn} />);
    expect(container.firstChild).toMatchSnapshot();
  });
  test("In not loaded state upload icon and text are displayed", () => {
    const mockFn = jest.fn();
    render(<UploadButton loaded={false} multiple={false} onClick={mockFn} />);
    expect(screen.getByTestId(UPLOAD_BUTTON)).toHaveTextContent("Hochladen");
    expect(screen.getByTestId(UPLOAD_BUTTON_UPLOAD)).toBeInTheDocument();
  });
  test("In loaded state check icon is diplayed", () => {
    const mockFn = jest.fn();
    render(<UploadButton loaded multiple onClick={mockFn} />);
    expect(screen.getByTestId(UPLOAD_BUTTON_CHECK)).toBeInTheDocument();
  });
  test("Focus on button and press enter", () => {
    const mockFn = jest.fn();
    render(<UploadButton loaded={false} multiple onClick={mockFn} />);
    expect(screen.getByTestId(UPLOAD_BUTTON)).not.toHaveFocus();
    userEvent.tab();
    expect(screen.getByTestId(UPLOAD_BUTTON)).toHaveFocus();
    userEvent.keyboard("{Space}");
    userEvent.keyboard("{Enter}");
    expect(mockFn).toBeCalledTimes(1);
  });
  test("Click on button", () => {
    const mockFn = jest.fn();
    render(<UploadButton loaded={false} multiple onClick={mockFn} />);
    userEvent.click(screen.getByTestId(UPLOAD_BUTTON));
    expect(mockFn).toBeCalledTimes(1);
  });
});
