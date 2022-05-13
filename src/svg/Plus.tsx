import * as React from "react";
import { SVGProps } from "react";

const SvgPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 15" fill="#fff" {...props}>
    <path d="M7.933 6.098H14v1.867H7.933v6.066H6.067V7.965L0 7.99V6.098l6.067-.026V.032h1.866v6.066Z" />
  </svg>
);

export default SvgPlus;
