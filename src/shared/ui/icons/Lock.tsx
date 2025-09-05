import * as React from "react";
const SvgLock = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="carLock"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M5 0C3.243 0 1.818 1.343 1.818 3v1.714C.814 4.714 0 5.482 0 6.43v3.857C0 11.233.814 12 1.818 12h6.364C9.186 12 10 11.232 10 10.286V6.429c0-.947-.814-1.715-1.818-1.715V3c0-1.657-1.425-3-3.182-3m2.273 4.714V3C7.273 1.817 6.255.857 5 .857S2.727 1.817 2.727 3v1.714z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLock;
