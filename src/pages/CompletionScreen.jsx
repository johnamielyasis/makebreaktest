import { useRecoilState } from "recoil";
import { classicAtom } from "../recoil/index.js";
import { useEffect } from "react";

const CompletionScreen = () => {
  const [ gameState, setGameState ] = useRecoilState(classicAtom);
  useEffect(() => {
  }, [gameState]);
  return <h1>{gameState.makeCount}</h1>;
};

export default CompletionScreen;
