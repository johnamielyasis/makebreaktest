import React from 'react';
import Container from '@mui/material/Container';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import { ReactComponent as HeroImage } from '../assets/mb-logo-1557x1080.svg';
import { default as LandingButtons } from '../components/molecules/LandingButtons.jsx';
import { GameScreen } from './index.js'
import {
    atom, useRecoilState
    } from 'recoil';
    import { classicAtom } from '../recoil/index.js';

const Classic2 = () => {
    const [ classicStates, setClassicStates ] = useRecoilState(classicAtom);
    const gameStartStatus = classicStates.gameStart;
    console.log('this is gamestart', classicStates.gameStart);
    
    return (
        <Container>
            {
                gameStartStatus ? 
                    <GameScreen />
                :
                    <Grid2 container >
                        <Grid2 xs={12} display="flex" justifyContent="center" alignItems="center">
                            <HeroImage style={{
                                "marginTop": "142px",
                                "marginLeft": "79px",
                                "marginRight": "59px"
                                }} />
                        </Grid2>
                        <Grid2 xs={12} display="flex" justifyContent="center" alignItems="center">
                            <LandingButtons />
                        </Grid2>
                    </Grid2>
            }
        </Container>
    )
}

export default Classic2;