import * as React from "react";
const SvgCarMediaNextTrack = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="carMediaNextTrack"
    {...props}
  >
    <rect width={30} height={30} fill="#fff" fillOpacity={0.06} rx={5} />
    <path
      fill="#fff"
      fillOpacity={0.5}
      d="M14 11.142c0-.867.9-1.417 1.636-1l6.793 3.859c.762.433.762 1.565 0 1.998l-6.793 3.858c-.736.418-1.636-.132-1.636-.999V16.81l-5.364 3.048C7.9 20.275 7 19.725 7 18.858v-7.716c0-.867.9-1.417 1.636-1L14 13.19z"
    />
  </svg>
);
export default SvgCarMediaNextTrack;
