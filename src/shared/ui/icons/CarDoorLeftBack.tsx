import * as React from "react";
const SvgCarDoorLeftBack = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="carDoorLeftBack"
    viewBox="0 0 26 26"
    fill="none"
    {...props}
  >
    <circle
      cx={13}
      cy={13}
      r={12.25}
      fill="#000"
      fillOpacity={0.5}
      stroke="#E7434F"
      strokeWidth={0.5}
    />
    <path
      fill="#E7434F"
      fillRule="evenodd"
      d="M8.6 8C7.716 8 7 8.689 7 9.538v6.924C7 17.312 7.716 18 8.6 18h7.008c.209 0 .383-.155.398-.355.087-1.092 1.036-1.953 2.194-1.953q.174 0 .339.025a.41.41 0 0 0 .321-.088.38.38 0 0 0 .14-.292v-2.045c0-.255-.066-.507-.193-.732L17.6 10.417C16.76 8.927 15.14 8 13.38 8zm6.235 4.615h3.093l-1.032-1.832c-.699-1.24-2.049-2.014-3.517-2.014H8.6c-.442 0-.8.345-.8.77v3.076zM14 14.923c-.22 0-.4-.172-.4-.384s.18-.385.4-.385h1.6c.22 0 .4.172.4.385 0 .212-.18.384-.4.384z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCarDoorLeftBack;
