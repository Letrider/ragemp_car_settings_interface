import * as React from "react";
const SvgMark = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="carMark"
    viewBox="0 0 14 20"
    {...props}
  >
    <path
      fill="#fff"
      fillOpacity={0.5}
      d="M7 0C3.14 0 0 3.119 0 6.952 0 11.77 7.007 20 7.007 20S14 11.533 14 6.952C14 3.119 10.86 0 7 0m2.112 8.987A3 3 0 0 1 7 9.855c-.765 0-1.53-.29-2.112-.868a2.955 2.955 0 0 1 0-4.195A2.98 2.98 0 0 1 7 3.924c.798 0 1.548.308 2.112.868a2.955 2.955 0 0 1 0 4.195"
    />
  </svg>
);
export default SvgMark;
