'use client';
import * as React from "react";
const SvgClock = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="clock"
    fill="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M6 .5a6 6 0 1 0 0 12 6 6 0 0 0 0-12m.462 2.308a.462.462 0 0 0-.924 0V6.5c0 .255.207.462.462.462h2.77a.462.462 0 0 0 0-.924H6.461z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgClock;
