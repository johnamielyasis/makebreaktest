import React from "react";
import Container from "@mui/material/Container";
import ReusableButton from "../atoms/Button";
import { useRecoilState } from "recoil";
import { classicAtom } from "../../recoil/index.js";
import { handleGameBeginning } from "../../utils";

const LandingButtons = () => {
  const [gameStart, setGameStart] = useRecoilState(classicAtom);

  return (
    <div>
      <Container
        style={{
          marginTop: "40px",
        }}
      >
        <ReusableButton
          background={"#A8D1D6"}
          onClick={() => {
            handleGameBeginning(gameStart, setGameStart);
          }}
        >
          PLAY
        </ReusableButton>
        <br />
        <ReusableButton background={"#C5B3AA"}>SETTINGS</ReusableButton>
        <br />
        <ReusableButton background={"#C5B3AA"}>TUTORIAL</ReusableButton>
      </Container>
    </div>
  );
};

export default LandingButtons;
