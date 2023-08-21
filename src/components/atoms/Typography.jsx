import React from 'react';
import Typography from '@mui/material/Typography';

const StyledTypography = ({children}) => {
    return (
        <Typography align="center">
            {children}
        </Typography>        
    );
}

export default StyledTypography;