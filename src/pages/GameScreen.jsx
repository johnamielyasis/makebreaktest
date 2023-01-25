import React from "react";
import { CompletionScreen } from "../pages/index.js"
import { MobileNavbar, GameButtons } from "../components/organisms/index.js";
import { QuestionCard } from "../components/molecules/index.js";
import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { classicAtom } from "../recoil/index.js";

const GameScreenWrapper = styled.div`
  margin: 0 auto;
  max-width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 45px 20px;
  box-sizing: border-box;
`;

const GameScreen = () => {
  const [count, setCount] = useRecoilState(classicAtom);
  return (
    <GameScreenWrapper>
      <MobileNavbar />
      {count.gameComplete ? (
        <CompletionScreen />
      ) : (
        <div>
          <p>makes: {count.makeCount}</p>
          <p>breaks: {count.breakCount}</p>
          <p>skips: {count.skipCount}</p>
          <p>q-index: {count.questionIndex}</p>
          <QuestionCard />
          <GameButtons />
        </div>
      )}
    </GameScreenWrapper>
  );
};

export default GameScreen;
