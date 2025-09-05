import * as React from "react";
const SvgCarDoorBackRight = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="carDoorBackRight"
    viewBox="0 0 26 26"
    {...props}
  >
    <circle cx={13} cy={13} r={12.25} fill="#000" fillOpacity={0.5} />
    <circle cx={13} cy={13} r={12.25} fill="#43E748" fillOpacity={0.2} />
    <circle cx={13} cy={13} r={12.25} stroke="#43E748" strokeWidth={0.5} />
    <path
      fill="#43E748"
      fillRule="evenodd"
      d="M8.6 18c-.884 0-1.6-.689-1.6-1.538V9.538C7 8.688 7.716 8 8.6 8h7.008c.209 0 .383.155.398.355.087 1.092 1.036 1.953 2.194 1.953q.174 0 .339-.025a.41.41 0 0 1 .321.088c.089.073.14.18.14.292v2.045c0 .255-.066.507-.193.732L17.6 15.583C16.76 17.073 15.14 18 13.38 18zm6.235-4.615h3.093l-1.032 1.832c-.699 1.24-2.049 2.014-3.517 2.014H8.6c-.442 0-.8-.345-.8-.77v-3.076zM14 11.077c-.22 0-.4.172-.4.384s.18.385.4.385h1.6c.22 0 .4-.172.4-.385a.393.393 0 0 0-.4-.384z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCarDoorBackRight;
