import * as React from "react";
import { SVGProps } from "react";

const SvgCircleCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <defs>
      <style>
        {
          ".check{fill:transparent;fill-opacity:0;stroke-color:inherit;stroke-linecap:round;stroke-linejoin:round;stroke-width:3px}"
        }
      </style>
    </defs>
    <circle className="check" cx={12} cy={12} r={10} />
    <path className="check" d="m6 13 3 3 7-8" />
  </svg>
);

export default SvgCircleCheck;
