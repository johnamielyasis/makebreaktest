import React from "react";
import { IconLogo, Help } from "../molecules/index.js";

const MobileNavbar = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        height: "44px",
      }}>
      <IconLogo />
      <Help />
    </div>
  );
};

export default MobileNavbar;
