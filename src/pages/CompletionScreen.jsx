import { themes } from "../constants/index.js";
import { useRecoilState } from "recoil";
import { classicAtom } from "../recoil/index.js";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";

const makeGreen = themes.colorMap.makeGreen;

const BreakContainer = styled.div`
  align-items: center;
  background-color: red;
  display: flex;
  justify-content: right;
  height: 180px;
  width: 100%;
`;

const CompatibilityContainer = styled.div`
  display: flex;
  height: 152px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 40px auto;
`;
const FluidContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  height: 100vh;
  align-items: center;
`;

const MakeContainer = styled.div`
  align-items: center;
  background-color: blue;
  display: flex;
  height: 180px;
  width: 100%;
`;

const MakeCountContainer = styled.div`
  align-items: center;
  background-color: ${makeGreen};
  border: solid 1px black;
  border-radius: 0px 100px 100px 0px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  height: 180px;
  left: 0px;
  padding: 0px 32px;
  position: absolute;
  width: 240px;
`;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SkipContainer = styled.div`
  align-items: center;
  background-color: grey;
  display: flex;
  height: 180px;
  width: 100%;
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
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          COMPATIBILITY
        </Typography>
        <br />
        <Typography
          style={{
            fontSize: "16px",
            fontWeight: 300,
          }}
        >
          {gameState.compatibilityMessage}
        </Typography>
      </CompatibilityContainer>
      <ResultContainer>
        <MakeContainer>
          <MakeCountContainer>
            <Typography
              style={{
                fontSize: "16px",
                fontWeight: 400,
                letterSpacing: "0.3em",
                lineHeight: "19px",
              }}
            >MAKES: {gameState.makeCount}</Typography>
          </MakeCountContainer>
        </MakeContainer>
        <BreakContainer>
          <p>BREAKS: {gameState.breakCount}</p>
        </BreakContainer>
        <SkipContainer>
          <p>SKIPS: {gameState.skipCount}</p>
        </SkipContainer>
      </ResultContainer>
    </FluidContainer>
  );
};

export default CompletionScreen;
