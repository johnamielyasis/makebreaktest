import React from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { handleGameScreenRender } from "../../utils";
import { IconLogo, Help } from "../molecules/index.js";
import { useRecoilState } from "recoil";
import { classicAtom } from "../../recoil/index.js";
import Typography from "@mui/material/Typography";

const MobileNavbar = () => {
  const [classicStates, setClassicStates] = useRecoilState(classicAtom);
  const hasGameStarted = classicStates.gameScreenRender;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: "44px",
      }}
    >
      {hasGameStarted ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
          onClick={() => handleGameScreenRender(classicStates, setClassicStates)}
        >
          <MdOutlineArrowBackIosNew
            style={{
              fontSize: "28px",
            }}
          />
          <Typography
            style={{
              color: "black",
              letter: "30%",
              letterSpacing: "0.3em",
              lineHeight: "18.75px",
              fontSize: "14px",
            }}
          >
            BACK
          </Typography>
        </div>
      ) : (
        <IconLogo />
      )}
      <Help />
    </div>
  );
};

export default MobileNavbar;
