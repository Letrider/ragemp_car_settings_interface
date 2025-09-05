import * as React from "react";
const SvgCarMediaAddToList = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    {...props}
  >
    <rect width={28} height={28} fill="#fff" fillOpacity={0.06} rx={5} />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.3}
      strokeWidth={1.5}
      d="M14 8v12m6-6H8"
    />
  </svg>
);
export default SvgCarMediaAddToList;
