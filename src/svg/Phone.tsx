import * as React from "react";
import { SVGProps } from "react";

const SvgPhone = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" {...props}>
    <path d="m123.288 96.797-22.5-16.448a6.26 6.26 0 0 0-8.084.59l-12.02 11.804-.041.041a5.336 5.336 0 0 1-7.504-.083L52.36 71.92 35.3 54.861a5.336 5.336 0 0 1-.083-7.504l.04-.04 11.806-12.021a6.26 6.26 0 0 0 .59-8.084l-16.45-22.5a6.262 6.262 0 0 0-9.483-.733l-8.48 8.48q-.804.804-1.535 1.668c-1.556 1.84-4.926 5.964-6.207 8.618a34.595 34.595 0 0 0 5.739 38.17l55.848 55.85a34.595 34.595 0 0 0 38.171 5.738c2.654-1.281 6.778-4.65 8.618-6.207q.864-.731 1.668-1.535l8.48-8.48a6.262 6.262 0 0 0-.733-9.484Z" />
  </svg>
);

export default SvgPhone;