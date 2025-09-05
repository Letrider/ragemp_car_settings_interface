import * as React from "react";
const SvgCarClose = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="carClose"
    viewBox="0 0 14 14"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.5}
      d="M1 13 13 1M1 1l12 12"
    />
  </svg>
);
export default SvgCarClose;
