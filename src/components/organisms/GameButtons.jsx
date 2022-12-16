import { Button } from "../atoms/index.js";
import { themes } from "../../constants/index.js";
import { useRecoilState } from "recoil";

import { classicAtom } from "../../recoil/index.js";
import { handleIndex, handleCompletionStatus } from "../../utils/index";

const GameButtons = () => {

  const makeGreen = themes.colorMap.makeGreen;
  const breakRed = themes.colorMap.breakRed;
  const skipGrey = themes.colorMap.skipGrey;

  const [ index, setIndex ] = useRecoilState(classicAtom);

  // const handleIndex = (state, setter, change) => {
  //   let newValue = change === 'increment' ? index.questionIndex + 1 : index.questionIndex - 1; 
  //   let newIndex = { ...index, questionIndex: newValue };
  //   setIndex(newIndex);
  //   console.log(newIndex);
  // }

  console.log(index.gameComplete, index.numberOfQuestions, index.questionIndex);

  const handleClick = () => {
    handleIndex(index, setIndex, 'addIndex');
    if (index.numberOfQuestions === (index.questionIndex + 1)) {
      handleCompletionStatus(index, setIndex);
    }
  }


  return (
    <div
      style={{
        display: "flex",
        flex: 2,
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center"
      }}
    >
      <Button background={makeGreen} onClick={() => handleClick()}>Make</Button>
      <Button background={breakRed} onClick={() => handleIndex(index, setIndex, 'addIndex')}>Break</Button>
      <Button background={skipGrey} onClick={() => handleIndex(index, setIndex, 'addIndex')}>Skip</Button>
    </div>
  );
};

export default GameButtons;
