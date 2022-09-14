import React from 'react';
import { styled, Button } from '@mui/material';


const StyledButton = styled(Button)(({ color }) => ({
    color: 'color',
    width: '140px',
    height: '44px',
    borderTopRightRadius: '30px',
    borderBottomLeftRadius: '30px',
    borderBottomRightRadius: '30px',
    marginTop: '61px'
}));

const ReusableButton = ({ onClick, children, background }) => {
    return (
            <StyledButton 
            variant='contained' 
            onClick={onClick}
            style={{
                backgroundColor: background, 
            }}
            >
                {children}
            </StyledButton>
    );
};

export default ReusableButton;