import { useRecoilState } from "recoil";
import { classicAtom } from "../recoil/index.js";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";

const CompatibilityContainer = styled.div`
  display: flex;
  height: 152px;
  width: 256px;
  background-color: yellow;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 40px auto;
`;
const FluidContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: green;
  height: 100vh;
  align-items: center;
`;

const LeftContainer = styled.div`
`;

const ResultContainer = styled.div`
  display: flex;
`;

const RightContainer = styled.div`
`;
const CompletionScreen = () => {
  const [gameState] = useRecoilState(classicAtom);
  return (
    <FluidContainer>
      <CompatibilityContainer>
        <Typography
          style={{
            fontSize: "24px",
            fontWeight: 560,
          }}
        >
          {gameState.compatibility}%
        </Typography>
        <Typography
          style={{
            fontSize: "24px",
            fontWeight: 400,
            letterSpacing: "0.3em",
          }}
        >
          Compatibility
        </Typography>
        <br />
        <Typography
          style={{
            fontSize: "16px",
            fontWeight: 300,
          }}
        >
          "{gameState.compatibilityMessage}"
        </Typography>
      </CompatibilityContainer>
      <ResultContainer>
        <div>
          <p>Makes: {gameState.makeCount}</p>
          <p>Skips: {gameState.skipCount}</p>
        </div>
        <div>
          <p>Breaks: {gameState.breakCount}</p>
        </div>
      </ResultContainer>
    </FluidContainer>
  );
};

export default CompletionScreen;
