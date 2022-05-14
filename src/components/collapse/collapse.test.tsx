import "@testing-library/jest-dom";
import { collapseContent, stylesCollapse } from "./collapse.utils";

describe("Collapse", () => {
  test("stylesCollapse block is open", () => {
    expect(stylesCollapse(true, 100)).toEqual({
      height: "100px",
    });
  });
  test("stylesCollapse block is close", () => {
    expect(stylesCollapse(false, 100)).toEqual({
      height: "0px",
    });
  });
  test("collapseContent is open", () => {
    expect(collapseContent(true)).toEqual("collapse__content collapse__content--visible");
  });
  test("collapseContent is close", () => {
    expect(collapseContent(false)).toEqual("collapse__content collapse__content--hidden");
  });
  // TODO: Find how to test child height does not return 0
});
