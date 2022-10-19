import { Button } from "../atoms/index.js";
import { themes } from "../../constants/index.js";

const GameButtons = () => {

  const makeGreen = themes.colorMap.makeGreen;
  const breakRed = themes.colorMap.breakRed;
  const skipGrey = themes.colorMap.skipGrey;

  return (
    <div
      style={{
        display: "flex",
        flex: 2,
        background: "green",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center"
      }}
    >
      <Button background={makeGreen} onClick={() => console.log(themes)}>Make</Button>
      <Button background={breakRed}>Break</Button>
      <Button background={skipGrey}>Skip</Button>
    </div>
  );
};

export default GameButtons;
