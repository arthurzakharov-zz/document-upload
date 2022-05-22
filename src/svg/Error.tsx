import * as React from "react";
import { SVGProps } from "react";

const SvgError = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 38 38" fill="none" stroke="red" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx={19} cy={19} r={18} strokeWidth={2} />
    <path strokeWidth={2} d="m9.996 27.453 18.321-18.32M9.683 9.133l18.321 18.32" />
  </svg>
);

export default SvgError;
