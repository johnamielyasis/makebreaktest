import React from "react";
import { IconLogo, Help } from "../molecules/index.js";

const MobileNavbar = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        background: "red",
        height: "44px",
      }}>
      <IconLogo onClick={() => {console.log('hw')}} />
      <Help />
    </div>
  );
};

export default MobileNavbar;
