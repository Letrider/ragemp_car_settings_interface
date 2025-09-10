import * as React from "react";
const SvgCarMediaPlay = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="carMediaPlay"

    {...props}
  >
    <rect fill="#fff" fillOpacity={0.06} rx={5} />
    <g transform="">
      <path
        fill="#fff"
        fillOpacity={0.5}
        // fillRule="evenodd"
        d="M9 9.598c0-1.214 1.2-1.983 2.18-1.398l9.058 5.402c1.016.606 1.016 2.19 0 2.796L11.18 21.8C10.2 22.385 9 21.616 9 20.402z"
      // clipRule="evenodd"
      />
    </g>
  </svg>
);
export default SvgCarMediaPlay;
