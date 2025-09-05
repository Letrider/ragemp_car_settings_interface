import * as React from "react";
const SvgCarMediaPreviosTrack = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="carMediaPreviosTrack"
    fill="none"
    {...props}
  >
    <rect width={30} height={30} fill="#fff" fillOpacity={0.06} rx={5} />
    <path
      fill="#fff"
      fillOpacity={0.5}
      d="M16 11.142c0-.867-.9-1.417-1.635-1l-6.793 3.859c-.762.433-.762 1.565 0 1.998l6.793 3.858c.736.418 1.635-.132 1.635-.999v-2.05l5.364 3.048c.736.418 1.636-.13 1.636-.998v-7.716c0-.867-.9-1.417-1.636-1L16 13.19z"
    />
  </svg>
);
export default SvgCarMediaPreviosTrack;
