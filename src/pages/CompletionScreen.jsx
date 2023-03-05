import { themes } from "../constants/index.js";
import { useRecoilState } from "recoil";
import { classicAtom } from "../recoil/index.js";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";

const breakRed = themes.colorMap.breakRed;
const makeGreen = themes.colorMap.makeGreen;

const BreakContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: right;
  height: 180px;
  position: absolute;
  right: 0px;
  top: 376px;
  width: 100%;
  z-index: 1;
`;

const BreakCountContainer = styled.div`
  align-items: center;
  background-color: rgba(197,179,170,0.7);
  border-radius: 100px 0px 0px 100px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  height: 136px;
  justify-content: center;
  padding: 0px 32px;
  position: absolute;
  width: 180px;
`;

const CompatibilityContainer = styled.div`
  display: flex;
  height: 136px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 16px auto;
  text-align: center;
`;
const FluidContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

const MakeContainer = styled.div`
  align-items: center;
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
  height: 136px;
  justify-content: center;
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
  display: flex;
  height: 180px;
  left: 0px;
  top: 490px;
  position: absolute;
  width: 100%;
`;

const SkipCountContainer = styled.div`
  align-items: center;
  background-color: ${breakRed};
  border-radius: 0px 100px 100px 0px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  height: 136px;
  justify-content: center;
  left: 0px;
  padding: 0px 32px;
  position: absolute;
  width: 184px;
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
            fontSize: "24px",
            fontWeight: 300,
            margin: "0px auto"
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
            >
              MAKES: {gameState.makeCount}
            </Typography>
          </MakeCountContainer>
        </MakeContainer>
        <BreakContainer>
          <BreakCountContainer>
                <Typography
                  style={{
                    fontSize: "16px",
                    fontWeight: 400,
                    letterSpacing: "0.3em",
                    lineHeight: "19px",
                  }}
                >
                  SKIPS: {gameState.skipCount}
                </Typography>
          </BreakCountContainer>
        </BreakContainer>
        <SkipContainer>
          <SkipCountContainer>
            <Typography
              style={{
                fontSize: "16px",
                fontWeight: 400,
                letterSpacing: "0.3em",
                lineHeight: "19px",
              }}
            >
              BREAKS: {gameState.breakCount}
            </Typography>
          </SkipCountContainer>
        </SkipContainer>
      </ResultContainer>
    </FluidContainer>
  );
};

export default CompletionScreen;
