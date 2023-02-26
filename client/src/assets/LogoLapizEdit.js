import React from "react";

const LogoLapizEdit = ({ width, height }) => {
  return (
    <svg
      width={width || "20"}
      height={height || "20"}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="20" fill="#264653" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.4104 8.78022L31.2101 10.5807C32.2633 11.621 32.2633 13.3148 31.2101 14.3551L13.5726 32H8V26.4251L21.8647 12.5413L25.6375 8.78022C26.6774 7.73993 28.3705 7.73993 29.4104 8.78022ZM10.6663 29.3326L12.546 29.4126L25.6375 16.3023L23.7578 14.4218L10.6663 27.5188V29.3326Z"
        fill="white"
      />
    </svg>
  );
};

export default LogoLapizEdit;
