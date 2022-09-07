import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup'

const LandingButtons = () => {
    return (
        <ButtonGroup 
        orientation='vertical'
        aria-label="vertically aligned button group"
        size='large'
        >
            <Button variant="contained">first</Button>
            <br />
            <Button variant="contained">second</Button>
            <br />
            <Button variant="contained">third</Button>
        </ButtonGroup>
        
    )
};

export default LandingButtons