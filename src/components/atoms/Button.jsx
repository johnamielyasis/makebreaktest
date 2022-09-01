import React from 'react';
import { styled, Button } from '@mui/material';

const StyledButton = styled(Button)(({ color }) => ({
    color: color,
    borderRadius: '30px'
}));

const ReusableButton = ({ onClick, children }) => {
    return (
            <StyledButton variant='contained' onClick={onClick}>
                {children}
            </StyledButton>
    );
};

export default ReusableButton;