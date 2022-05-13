import { stylesCollapse } from "./collapse.utils";

describe("Collapse", () => {
  test("stylesCollapse block is open", () => {
    expect(stylesCollapse(true, 100)).toEqual({
      height: "100px",
      visibility: "visible",
    });
  });
  test("stylesCollapse block is close", () => {
    expect(stylesCollapse(false, 100)).toEqual({
      height: "0px",
      visibility: "hidden",
    });
  });
});
