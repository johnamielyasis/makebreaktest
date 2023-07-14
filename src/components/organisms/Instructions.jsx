import styled from "styled-components";

const InstructionsContainer = styled.div`
  display: flex;
`;

const LeftButton = styled.button``;

const RightButton = styled.button``;

const InstructionContent = styled.div``;
const Instructions = () => {
  return (
    <InstructionsContainer>
      <LeftButton></LeftButton>
      <InstructionContent>insertcontenthere</InstructionContent>
      <RightButton></RightButton>
    </InstructionsContainer>
  );
};

export default Instructions;
