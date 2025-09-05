import * as React from "react";
const SvgEmergency = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="carEmergency"
    viewBox="0 0 20 18"
    {...props}
  >
    <path
      fill="#fff"
      fillOpacity={0.5}
      d="M8.249 1.111c.76-1.381 2.745-1.381 3.505 0l7.617 13.85c.733 1.333-.23 2.963-1.752 2.964H2.384c-1.521 0-2.485-1.631-1.752-2.964zm2.192 1.706a.5.5 0 0 0-.88 0l-6.663 12.37a.5.5 0 0 0 .44.738h13.326a.5.5 0 0 0 .44-.738z"
    />
    <path
      fill="#fff"
      fillOpacity={0.5}
      d="M9.563 4.805a.5.5 0 0 1 .877 0L15.6 14.26a.5.5 0 0 1-.44.74H4.844a.5.5 0 0 1-.439-.74zm.615 2.522a.2.2 0 0 0-.353 0L6.66 13.205a.2.2 0 0 0 .176.295h6.33a.2.2 0 0 0 .177-.295z"
    />
  </svg>
);
export default SvgEmergency;
