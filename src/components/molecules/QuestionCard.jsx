import React from "react";

import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { StyledTypography } from "../atoms/index.js";

const QuestionCard = () => {
  const gridStyles = {
    backgroundColor: "yellow",
  };

  return (
    <Grid
      container
      flexDirection="column"
      item
      xs={12}
      sx={gridStyles}
      flex={1}
      display="flex"
      justifyContent="flex-end"
      alignItems="center"
    >
      <StyledTypography
        style={{
          fontSize: "16px",
        }}
      >
        whatever goes here right
      </StyledTypography>
    </Grid>
  );
};

export default QuestionCard;
