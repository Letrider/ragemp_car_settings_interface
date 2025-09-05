import * as React from "react";
const SvgCloudWeather = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="cloudWeather"
    fill="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M2.286 4.864C2.286 2.454 4.332.5 6.857.5c1.926 0 3.573 1.137 4.247 2.745q.16-.018.325-.018c1.578 0 2.857 1.221 2.857 2.728q0 .213-.034.42C15.295 6.934 16 8.001 16 9.226c0 1.808-1.535 3.273-3.429 3.273H4c-2.21 0-4-1.71-4-3.818 0-1.53.942-2.848 2.301-3.458a4 4 0 0 1-.015-.36"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCloudWeather;
