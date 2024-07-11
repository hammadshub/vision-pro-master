import * as React from "react";

const PlaySvg = ({ fill = "black", width = "18", height = "18", ...props }) => (
  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="12" cy="12" r="11.5" stroke={fill} />
  <polygon points="10,8 16,12 10,16" fill={fill} />
</svg>

);

export default PlaySvg;
