import styled from "styled-components";
import { useState } from "react";
import Data from "../../data.json";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Typography } from "@mui/material";
import { handleAdvanceTutorialIndex } from "../../utils";

const tutorialData = Data.tutorial.images;
const tutorialCopy = Data.tutorial.copy;
const InstructionsContainer = styled.div`
  display: flex;
  align-items: center;
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
      <IoIosArrowBack
        style={{
          fontSize: "48",
        }}
      />
      <InstructionContent>
        <img
          src={tutorialData[tutorialIndex]}
          alt={tutorialCopy[tutorialIndex]}
          height="186px"
          width="300px"
        />
        <Typography letterSpacing={1} margin="auto" align="center">
          {tutorialCopy[tutorialIndex]}
        </Typography>
      </InstructionContent>
      <IoIosArrowForward
        style={{
          fontSize: "48",
        }}
        onClick={() => {
          handleAdvanceTutorialIndex(
            tutorialIndex,
            setTutorialIndex,
            tutorialData
          );
        }}
      />
    </InstructionsContainer>
  );
};

export default Instructions;
