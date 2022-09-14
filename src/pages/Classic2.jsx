import React from 'react';
import Container from '@mui/material/Container';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import { ReactComponent as HeroImage } from '../assets/mb-logo-1557x1080.svg';
import { default as LandingButtons } from '../components/molecules/LandingButtons.jsx';
import { GameScreen } from './index.js'

const Classic2 = () => {
    return (
        <Container>
            {/* <Typography 
                variant="h1"
                color="#948379"
                align="center"
            >
                Make or Break
            </Typography> */}
        <Grid2 container>
            <Grid2 xs={12} display="flex" justifyContent="center" alignItems="center">
                <HeroImage style={{
                    // "height": "237px",
                    // "width": "164px",
                    "marginLeft": "79px",
                    "marginRight": "59px"
                    }} />
            </Grid2>
            <Grid2 xs={12} display="flex" justifyContent="center" alignItems="center">
                <LandingButtons />
            </Grid2>
        </Grid2>
        <GameScreen />
        </Container>
    )
}

export default Classic2;