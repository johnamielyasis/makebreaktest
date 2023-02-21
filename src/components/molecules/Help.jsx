import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { StyledTypography } from "../atoms/index";
import { flexbox } from "@mui/system";

const Help = () => {
  return (
    <div
      style={{
        background: "#D9D9D9",
        borderRadius: "50%",
        width: "44px",
        height: "44px",
        color: "black",
        textAlign: "center",
        lineHeight: "44px",
        verticalAlign: "middle"
      }}
    >
      <div>
        ?
      </div>
    </div>
  );
};

export default Help;
