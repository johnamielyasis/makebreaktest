import { Button } from "../atoms/index.js";
import { themes } from "../../constants/index.js";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { classicAtom } from "../../recoil/index.js";
import { handleIndex } from "../../utils/index";

const GameButtons = () => {
  const makeGreen = themes.colorMap.makeGreen;
  const breakRed = themes.colorMap.breakRed;
  const skipGrey = themes.colorMap.skipGrey;

  const [index, setIndex] = useRecoilState(classicAtom);
  const [makeCount, setMakeCount] = useRecoilState(classicAtom);

  // const handleIndex = (state, setter, change) => {
  //   let newValue = change === 'increment' ? index.questionIndex + 1 : index.questionIndex - 1;
  //   let newIndex = { ...index, questionIndex: newValue };
  //   setIndex(newIndex);
  //   console.log(newIndex);
  // }

  useEffect(() => {
    console.log(index.questionIndex);
    console.log(makeCount.makeCount);
  }, [index.questionIndex]);

  return (
    <div
      style={{
        display: "flex",
        flex: 2,
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        background={makeGreen}
        onClick={() => handleIndex(index, setIndex, "addIndex", "make")}
      >
        Make
      </Button>
      <Button
        background={breakRed}
        onClick={() => handleIndex(index, setIndex, "addIndex", "break")}
      >
        Break
      </Button>
      <Button
        background={skipGrey}
        onClick={() => handleIndex(index, setIndex, "addIndex", "skip")}
      >
        Skip
      </Button>
    </div>
  );
};

export default GameButtons;
