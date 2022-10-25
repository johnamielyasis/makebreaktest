import React from "react";
import { IconLogo, Help } from "../molecules/index.js";
import {
  useRecoilState
    } from 'recoil';
import { classicAtom } from '../../recoil/index.js';
import { handleGameStart } from "../../utils/helperFunctions.js";

const MobileNavbar = () => {
  const [ gameStart, setGameStart ] = useRecoilState(classicAtom);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        background: "red",
        height: "44px",
      }}>
      <IconLogo onClick={() => {handleGameStart(gameStart, setGameStart, classicAtom)}} />
      <Help />
    </div>
  );
};

export default MobileNavbar;
