import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import ReusableButton from "../atoms/Button";
import { useRecoilState } from "recoil";
import { classicAtom } from "../../recoil/index.js";
import { handleGameBeginning } from "../../utils";

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

  return (
    <div>
      <Container
        style={{
          marginTop: "40px",
        }}
      >
        {gameStart.gameStart ? (
          <div>
            <ReusableButton onClick={handleOpen}>CONTINUE</ReusableButton>
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
          </div>
        ) : (
          <ReusableButton
            background={"#A8D1D6"}
            onClick={() => {
              handleGameBeginning(gameStart, setGameStart);
            }}
          >
            PLAY
          </ReusableButton>
        )}
        <br />
        <ReusableButton background={"#C5B3AA"}>SETTINGS</ReusableButton>
        <br />
        <ReusableButton background={"#C5B3AA"}>TUTORIAL</ReusableButton>
      </Container>
    </div>
  );
};

export default LandingButtons;
