import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2

import { ReactComponent as HeroImage } from "../assets/mb-logo-1557x1080.svg";

import Data from "../data.json";
import { default as LandingButtons } from "../components/molecules/LandingButtons.jsx";
import { GameScreen } from "./index.js";
import { useRecoilState } from "recoil";
import { classicAtom } from "../recoil/index.js";
import { handleCompletionStatus } from "../utils";


const Classic2 = () => {
  const [classicStates, setClassicStates] = useRecoilState(classicAtom);
  const gameStartStatus = classicStates.gameStart;

  const compatibility = Math.ceil((classicStates.makeCount / classicStates.numberOfQuestions) * 100);

  useEffect(() => {
    if (classicStates.numberOfQuestions === classicStates.questionIndex) {
      handleCompletionStatus(classicStates, setClassicStates, compatibility);
      console.log("THE GAME IS OVERRRRR", console.log(compatibility));
    }
  }, [classicStates.questionIndex]);
  return (
    <Container>
      {gameStartStatus ? (
        <GameScreen />
      ) : (
        <Grid2 container>
          <Grid2
            xs={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <HeroImage
              style={{
                marginTop: "142px",
                marginLeft: "79px",
                marginRight: "59px",
                width: "237px",
                height: "164",
              }}
            />
          </Grid2>
          <Grid2
            xs={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <LandingButtons />
          </Grid2>
        </Grid2>
      )}
    </Container>
  );
};

export default Classic2;
