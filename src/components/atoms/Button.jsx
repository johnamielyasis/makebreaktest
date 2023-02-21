import React from "react";
import { styled, Button } from "@mui/material";
import Typography from "@mui/material/Typography";

const StyledButton = styled(Button)(({ color }) => ({
  color: "color",
  width: "140px",
  height: "44px",
  borderTopRightRadius: "30px",
  borderBottomLeftRadius: "30px",
  borderBottomRightRadius: "30px",
  marginTop: "61px",
}));

const ReusableButton = ({ onClick, children, background }) => {
  return (
    <StyledButton
      variant="contained"
      onClick={onClick}
      style={{
        backgroundColor: background,
      }}
    >
      <Typography 
        style={{
            align: 'center',
            color: 'black',
            letter: '30%',
            letterSpacing: '0.3em',
            lineHeight: '18.75px',
            size: '16px',
            weight: 400,
        }}
      >{children}</Typography>
    </StyledButton>
  );
};

export default ReusableButton;
