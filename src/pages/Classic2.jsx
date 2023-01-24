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

  // functions
  const randomCompletionMessage = (compatibility) => {
    let completionMessageArrayLength = Data.messages[compatibility].length;
    return Data.messages[compatibility][Math.floor(Math.random() * (completionMessageArrayLength))]
  };

  const updateCompletionMessage = () => {
    if (compatibility < 25) {
      return `${randomCompletionMessage(0)}`
      } else if (compatibility < 50) {
        return `${randomCompletionMessage(25)}`
      } else if (compatibility < 70) {
        return `${randomCompletionMessage(50)}`
      } else if (compatibility < 80) {
        return `${randomCompletionMessage(70)}`
      } else if (compatibility < 90) {
        return `${randomCompletionMessage(80)}`
      } else if (compatibility < 100) {
        return `${randomCompletionMessage(90)}`
      } else {
        return `${randomCompletionMessage(100)}`
      }
  }

  useEffect(() => {
    if (classicStates.numberOfQuestions === classicStates.questionIndex) {
      const compatibilityMessage = updateCompletionMessage();
      handleCompletionStatus(classicStates, setClassicStates, compatibility, compatibilityMessage);
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
