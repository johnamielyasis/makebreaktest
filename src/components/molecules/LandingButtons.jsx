import React from "react";
// import Button from '@mui/material/Button';
// import ButtonGroup from '@mui/material/ButtonGroup';
import Container from "@mui/material/Container";
import ReusableButton from "../atoms/Button";
// import { StyledTypography } from "../atoms";
import {
useRecoilState
  } from "recoil";
import { classicAtom } from '../../recoil/index.js';

const LandingButtons = () => {
  const [ gameStart, setGameStart ] = useRecoilState(classicAtom);

  const handleGameStart = () => {
    const notGameStart = !gameStart.gameStart;
    const newGameStartStatus = { ...gameStart, gameStart: notGameStart };
    setGameStart(newGameStartStatus);
  };

  return (
    <div>
      <Container>
        <ReusableButton background={"#A8D1D6"} onClick={() => handleGameStart()}>PLAY</ReusableButton>
        <br />
        <ReusableButton background={"#C5B3AA"}>SETTINGS</ReusableButton>
        <br />
        <ReusableButton background={"#C5B3AA"}>TUTORIAL</ReusableButton>
      </Container>
      {/* <ButtonGroup 
        orientation='vertical'
        aria-label="vertically aligned button group"
        size='large'
        >
            <Button variant="contained">first</Button>
            <br />
            <Button variant="contained">second</Button>
            <br />
            <Button variant="contained">third</Button>
        </ButtonGroup> */}
    </div>
  );
};

export default LandingButtons;
