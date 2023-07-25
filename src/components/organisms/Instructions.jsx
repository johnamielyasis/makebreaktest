import styled from "styled-components";
import Data from "../../data.json";

const tutorialData = Data.tutorial.images;
const tutorialCopy = Data.tutorial.copy;
const altData = Data.tutorial.alt;

const InstructionsContainer = styled.div`
  display: flex;
`;

const LeftButton = styled.button``;

const RightButton = styled.button``;

const InstructionContent = styled.div`
  background-image: url("{tutorialData[0]}");
  background-repeat: no-repeat;
  height: 186px;
  width: 296px;
`;

const Instructions = () => {
  return (
    <InstructionsContainer>
      <InstructionContent>
        <img src={tutorialData[0]} alt={tutorialCopy[0]}/>
      </InstructionContent>
    </InstructionsContainer>
  );
};

export default Instructions;
