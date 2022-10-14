import { Button } from "../atoms/index.js";

const GameButtons = () => {
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
      <Button>Make</Button>
      <Button>Break</Button>
      <Button>Skip</Button>
    </div>
  );
};

export default GameButtons;
