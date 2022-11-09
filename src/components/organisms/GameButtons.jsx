import { Button } from "../atoms/index.js";
import { themes } from "../../constants/index.js";
import { useRecoilState } from "recoil";

import { classicAtom } from "../../recoil/index.js";

const GameButtons = () => {

  const makeGreen = themes.colorMap.makeGreen;
  const breakRed = themes.colorMap.breakRed;
  const skipGrey = themes.colorMap.skipGrey;

  const [ index, setIndex ] = useRecoilState(classicAtom);

  const handleIndex = (change) => {
    let newValue = change === 'increment' ? index.questionIndex + 1 : index.questionIndex - 1; 
    let newIndex = { ...index, questionIndex: newValue };
    setIndex(newIndex);
    console.log(newIndex);
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
      <Button background={makeGreen} onClick={() => handleIndex('increment')}>Make</Button>
      <Button background={breakRed}>Break</Button>
      <Button background={skipGrey}>Skip</Button>
    </div>
  );
};

export default GameButtons;
