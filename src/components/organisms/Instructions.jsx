import styled from "styled-components";
import { useState } from "react";
import Data from "../../data.json";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { Typography } from "@mui/material";
import { handleAdvanceTutorialIndex } from "../../utils";

const tutorialData = Data.tutorial.images;
const tutorialCopy = Data.tutorial.copy;
const InstructionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const InstructionContent = styled.div`
  height: 100%;
  max-width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Instructions = () => {
  const [tutorialIndex, setTutorialIndex] = useState(0);

  return (
    <InstructionsContainer>
      <MdArrowBackIos
        style={{
          fontSize: "48",
          margin: "0px auto"
        }}
      />
      <InstructionContent>
        <img
          src={tutorialData[tutorialIndex]}
          alt={tutorialCopy[tutorialIndex]}
          height="186px"
          width="300px"
        />
        <Typography letterSpacing={1} margin="16px">{tutorialCopy[tutorialIndex]}</Typography>
      </InstructionContent>
      <MdArrowForwardIos
        style={{
          fontSize: "48",
          margin: "0px auto"
        }}
        onClick={() => {
          handleAdvanceTutorialIndex(tutorialIndex, setTutorialIndex, tutorialData);
        }}
      />
    </InstructionsContainer>
  );
};

export default Instructions;
