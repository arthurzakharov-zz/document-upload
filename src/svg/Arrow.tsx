import * as React from "react";
import { SVGProps } from "react";

const SvgArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 12" fill="none" stroke="#0C6658" {...props}>
    <path d="m1 .5 5.96 5.958" strokeWidth={1.4} />
    <path d="m1 11.5 5.96-5.958" strokeOpacity={0.5} strokeWidth={1.4} />
  </svg>
);

export default SvgArrow;
