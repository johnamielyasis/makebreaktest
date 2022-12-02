import React from "react";
import Grid from "@mui/material/Grid";
import { StyledTypography } from "../atoms/index.js";
import { 
  useRecoilState
} from "recoil";
import { classicAtom } from "../../recoil/index.js";
import Data from "../../data.json";

const questions = Data.questions.sort(function () {
  return Math.random() - 0.5;
});

const QuestionCard = () => {


  const [ index, setIndex ] = useRecoilState(classicAtom);

  return (
    <Grid
      container
      flexDirection="column"
      item
      xs={12}
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
        {questions[index.questionIndex]}
      </StyledTypography>
    </Grid>
  );
};

export default QuestionCard;
