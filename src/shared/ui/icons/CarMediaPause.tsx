import * as React from "react";
const SvgCarMediaPause = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="carMediaPause"
    viewBox="0 0 28 28"
    {...props}
  >
    <rect fill="#fff" fillOpacity={0} rx={5} />
    <path
      fill="#fff"
      fillOpacity={0.5}
      fillRule="evenodd"
      d="M10 8.6c0-.331.256-.6.571-.6h1.143c.316 0 .572.269.572.6v10.8c0 .331-.256.6-.572.6h-1.143a.56.56 0 0 1-.404-.176A.62.62 0 0 1 10 19.4zm5.714 0c0-.331.256-.6.572-.6h1.143c.151 0 .297.063.404.176A.62.62 0 0 1 18 8.6v10.8c0 .331-.256.6-.571.6h-1.143c-.316 0-.572-.269-.572-.6z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCarMediaPause;
