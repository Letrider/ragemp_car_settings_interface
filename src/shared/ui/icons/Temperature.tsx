import * as React from "react";
const SvgTemperature = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="carTemperature"
    {...props}
  >
    <path
      fill="#fff"
      fillOpacity={0.5}
      d="M5 0a3.333 3.333 0 0 1 3.333 3.333v7.94a5 5 0 1 1-6.666 0v-7.94A3.333 3.333 0 0 1 5 0m0 1.667c-.92 0-1.667.746-1.667 1.666v8.686l-.555.496a3.333 3.333 0 1 0 4.443 0l-.554-.496V3.333c0-.92-.747-1.666-1.667-1.666m.833 10.978A2.499 2.499 0 1 1 2.5 15c0-1.088.696-2.012 1.667-2.355V6.667h1.666z"
    />
  </svg>
);
export default SvgTemperature;
