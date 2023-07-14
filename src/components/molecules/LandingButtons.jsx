import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import ReusableButton from "../atoms/Button";
import { useRecoilState } from "recoil";
import { classicAtom } from "../../recoil/index.js";
import { Instructions } from "../organisms";
import { handleGameBeginning, handleReset } from "../../utils";
import Data from "../../data.json";

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

const LandingButtons = () => {
  const [gameStart, setGameStart] = useRecoilState(classicAtom);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [settingsOpen, setSettingsOpen] = React.useState(false);
  const handleSettingsOpen = () => setSettingsOpen(true);
  const handleSettingsClose = () => setSettingsOpen(false);

  const [tutorialOpen, setTutorialOpen] = React.useState(false);
  const handleTutorialOpen = () => setTutorialOpen(true);
  const handleTutorialClose = () => setTutorialOpen(false);

  return (
    <div>
      <Container
        style={{
          marginTop: "40px",
        }}
      >
        {gameStart.gameStart ? (
          <>
            <ReusableButton onClick={handleOpen}>RESTART</ReusableButton>
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
                <Box
                  minWidth="40%"
                  display="flex"
                  justifyContent="space-between"
                >
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
                      onClick={() => handleReset(gameStart, setGameStart)}
                    >
                      YES
                    </Typography>
                  </Button>
                  <Button variant="outlined" onClick={handleClose}>
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
          </>
        ) : (
          <ReusableButton
            background={"#A8D1D6"}
            onClick={() => {
              handleGameBeginning(gameStart, setGameStart, Data);
            }}
          >
            PLAY
          </ReusableButton>
        )}
        <br />
        <ReusableButton background={"#C5B3AA"} onClick={handleSettingsOpen}>
          SETTINGS
        </ReusableButton>
        <Modal
          open={settingsOpen}
          onClose={handleSettingsClose}
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
              SETTING MODAL
            </Typography>
            <Box minWidth="40%" display="flex" justifyContent="space-between">
              <Typography>SETTING CAROUSEL WILL GO HERE</Typography>
            </Box>
          </Box>
        </Modal>
        <br />
        <ReusableButton background={"#C5B3AA"} onClick={handleTutorialOpen}>
          TUTORIAL
        </ReusableButton>
        <Modal
          open={tutorialOpen}
          onClose={handleTutorialClose}
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
              TUTORIAL MODAL
            </Typography>
            <Box minWidth="40%" display="flex" justifyContent="space-between">
              <Instructions />
            </Box>
          </Box>
        </Modal>
      </Container>
    </div>
  );
};

export default LandingButtons;