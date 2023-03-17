import React from "react";
import { themes } from "../constants/index.js";
import { useRecoilState } from "recoil";
import { classicAtom } from "../recoil/index.js";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import styled from "@emotion/styled";
import { handleReset } from "../utils";


const breakRed = themes.colorMap.breakRed;
const makeGreen = themes.colorMap.makeGreen;

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const BreakContainer = styled.div`
  align-items: center;
  display: flex;
  height: 180px;
  left: 0px;
  top: 500px;
  position: absolute;
  width: 100%;
`;

const BreakCountContainer = styled.div`
  align-items: center;
  background-color: ${breakRed};
  border-radius: 0px 100px 100px 0px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  height: 144px;
  justify-content: center;
  left: 0px;
  padding: 0px 32px;
  position: absolute;
  width: 184px;
`;

const CompatibilityContainer = styled.div`
  display: flex;
  height: 190px;
  width: 100%;
  flex-direction: column;
  margin: 0px auto;
  text-align: center;
`;
const FluidContainer = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

const MakeContainer = styled.div`
  align-items: center;
  display: flex;
  height: 144px;
  width: 100%;
`;

const MakeCountContainer = styled.div`
  align-items: center;
  background-color: ${makeGreen};
  border: solid 1px black;
  border-radius: 0px 100px 100px 0px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  height: 144px;
  justify-content: center;
  left: 0px;
  padding: 0px 32px;
  position: absolute;
  width: 240px;
`;

const NewGameContainer = styled.div`
  margin-top: auto;
`;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SkipContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: right;
  height: 180px;
  position: absolute;
  right: 0px;
  top: 380px;
  width: 100%;
  z-index: 1;
`;

const SkipCountContainer = styled.div`
  align-items: center;
  background-color: rgba(197, 179, 170, 0.7);
  border-radius: 100px 0px 0px 100px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  height: 144px;
  justify-content: center;
  padding: 0px 32px;
  position: absolute;
  width: 180px;
`;

const CompletionScreen = () => {
  const [gameState, setGameState] = useRecoilState(classicAtom);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            // textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          COMPATIBILITY
        </Typography>
        <br />
        <Typography
          style={{
            fontSize: "24px",
            fontWeight: 300,
            margin: "auto",
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
              SKIPS: {gameState.skipCount}
            </Typography>
          </SkipCountContainer>
        </SkipContainer>
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
              BREAKS: {gameState.breakCount}
            </Typography>
          </BreakCountContainer>
        </BreakContainer>
      </ResultContainer>
      <NewGameContainer>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="restart/continue game modal"
          aria-describedby="choose to either restart the game or return to previous screen"
        >
          <Box
            sx={modalStyle}
            display="flex"
            alignItems="center"
            flexDirection="column"
          >
            <Typography
              style={{
                align: "center",
                color: "black",
                letter: "30%",
                letterSpacing: "0.3em",
                lineHeight: "18.75px",
                marginBottom: "24px",
                size: "16px",
                weight: 400,
              }}
            >
              START A NEW GAME?
            </Typography>
            <Box minWidth="40%" display="flex" justifyContent="space-between">
              <Button variant="contained" alignItems="center">
                <Typography
                  style={{
                    align: "center",
                    color: "white",
                    letter: "30%",
                    letterSpacing: "0.3em",
                    lineHeight: "18.75px",
                    size: "16px",
                    weight: 400,
                  }}
                  onClick={() => handleReset(gameState, setGameState)}
                >
                  YES
                </Typography>
              </Button>
              <Button variant="outlined" onClick={() => handleReset(gameState, setGameState, true)}>
                <Typography
                  style={{
                    align: "center",
                    letter: "30%",
                    letterSpacing: "0.3em",
                    lineHeight: "18.75px",
                    size: "16px",
                    weight: 400,
                  }}
                >
                  NO
                </Typography>
              </Button>
            </Box>
          </Box>
        </Modal>
        <Button onClick={handleOpen}>
          <Typography
            style={{
              fontSize: "24px",
              fontWeight: 560,
              margin: "0px auto 20%",
            }}
          >
            NEW GAME?
          </Typography>
        </Button>
      </NewGameContainer>
    </FluidContainer>
  );
};

export default CompletionScreen;
