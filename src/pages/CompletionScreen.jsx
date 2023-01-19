import { useRecoilState } from "recoil";
import { classicAtom } from "../recoil/index.js";

const CompletionScreen = () => {
  const [gameState] = useRecoilState(classicAtom);
  return (
    <div>
      <p>Compatibility rating: {gameState.compatibility}%</p>
      <p>Makes: {gameState.makeCount}</p>
      <p>Breaks: {gameState.breakCount}</p>
      <p>Skips: {gameState.skipCount}</p>
    </div>
  );
};

export default CompletionScreen;
