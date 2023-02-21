import React, { useState } from "react";
import Modal from "react-modal";
import { Instructions } from "../components/molecules/index.js";
import Data from "../data.json";
import ReusableButton from '../components/atoms/Button';
import {
  useRecoilState
} from 'recoil';
import { classicAtom } from '../recoil/index.js';

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  },
};

const questions = Data.questions.sort(function () {
  return Math.random() - 0.5;
});

const Classic = () => {
  // recoil stuff
  const [classicStates] = useRecoilState(classicAtom);
  // const [count, setCount] = useRecoilState(countState);
  // const updateCount = () => {
  //   setCount(count + 1);
  // }
  //modal stuff
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  // const afterOpenModal = () => (subtitle.style.color = "red");
  const closeModal = () => setIsOpen(false);
  // end modal stuff
  const [breakCount, setBreakCount] = useState(0);
  const [completionStatus, setCompletionStatus] = useState(false);
  const [difficulty, setDifficulty] = useState("");
  const [makeCount, setMakeCount] = useState(0);
  const [mehCount, setMehCount] = useState(0);
  const [questionCount, setQuestionCount] = useState(1);
  const [started, setStarted] = useState(false);
  const [winConditionCount, setWinConditionCount] = useState(0);

  const compatibility = Math.ceil((makeCount / winConditionCount) * 100);

  const handleStarted = () => setStarted(true);
  const updateBreakCount = () => setBreakCount(breakCount + 1);
  const updateMakeCount = () => setMakeCount(makeCount + 1);
  const updateMehCount = () => setMehCount(mehCount + 1);
  const updateQuestionCount = () => setQuestionCount(questionCount + 1);
  const checkCompletion = () => {
    if (winConditionCount === questionCount) {
      setCompletionStatus(true);
      updateCompletionMessage();
    }
  };

  const playAgain = () => {
    setCompletionStatus(false);
    setDifficulty("");
    setMakeCount(0);
    setBreakCount(0);
    setMehCount(0);
    questions.sort(function () {
      return Math.random() - 0.5;
    });
    setQuestionCount(1);
  };

  const randomCompletionMessage = (compatibility) => {
    let completionMessageArrayLength = Data.messages[compatibility].length;
    return Data.messages[compatibility][Math.floor(Math.random() * (completionMessageArrayLength))]
  };

  const updateCompletionMessage = () => {
    if (compatibility < 25) {
      return `${randomCompletionMessage(0)}`
      } else if (compatibility < 50) {
        return `${randomCompletionMessage(25)}`
      } else if (compatibility < 70) {
        return `${randomCompletionMessage(50)}`
      } else if (compatibility < 80) {
        return `${randomCompletionMessage(70)}`
      } else if (compatibility < 90) {
        return `${randomCompletionMessage(80)}`
      } else if (compatibility < 100) {
        return `${randomCompletionMessage(90)}`
      } else {
        return `${randomCompletionMessage(100)}`
      }
  }
  
  const updateEasyDifficulty = () => {
    setDifficulty("easy");
    // switch back to 11 when done with testing
    setWinConditionCount(2);
  };

  const updateEndlessDifficulty = () => {
    setDifficulty("endless");
    // switch back to 11 when done with testing
    setWinConditionCount(questions.length - 1);
  };

  const updateHardDifficulty = () => {
    setDifficulty("hard");
    setWinConditionCount(15);
  };

  const updateMildDifficulty = () => {
    setDifficulty("mild");
    setWinConditionCount(13);
  };

  // these three functions could be made into a single one
  const updateMake = () => {
    updateMakeCount();
    updateQuestionCount();
    checkCompletion();
  };

  const updateMeh = () => {
    updateMehCount();
    updateQuestionCount();
    checkCompletion();
  };

  const updateBreak = () => {
    updateBreakCount();
    updateQuestionCount();
    checkCompletion();
  };

  console.log(
    "win condition count: ",
    winConditionCount,
    "question count: ",
    questionCount,
    "completion status:",
    completionStatus,
    "make count:",
    makeCount,
    "break count:",
    breakCount,
    "meh count",
    mehCount,
    "compatibility",
    compatibility,
    "classic states",
    classicStates
  );
    
  return (
    <>
      <div>
        <h2>Classic Mode</h2>
        {started === false ? (
          <div>
            <ReusableButton onClick={openModal}>Instructions</ReusableButton>
            <Modal
              isOpen={modalIsOpen}
              // onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={modalStyles}
              contentLabel="Example Modal"
              ariaHideApp={false}
            >
              <Instructions />
              <ReusableButton onClick={closeModal}>Close</ReusableButton>
            </Modal>
            <br />
            <ReusableButton onClick={handleStarted}>Play</ReusableButton>
          </div>
        ) : (
          <div>
            {difficulty === "" ? (
              <div>
                <h3>Select Difficulty Level:</h3>
                <ReusableButton onClick={updateEasyDifficulty}>Easy</ReusableButton>
                <ReusableButton onClick={updateMildDifficulty}>Mild</ReusableButton>
                <ReusableButton onClick={updateHardDifficulty}>Hard</ReusableButton>
                <ReusableButton onClick={updateEndlessDifficulty}>Endless</ReusableButton>
              </div>
            ) : completionStatus ? (
              <div>
                <button onClick={playAgain}>Play again</button>
              </div>
            ) : (
              <div>
                <h3>Question:</h3>
                <p>{questions[questionCount]}</p>
                <button onClick={updateMake}>Make</button>
                <button onClick={updateMeh}>Meh</button>
                <button onClick={updateBreak}>Break</button>
              </div>
            )}
            <div>
              <h3>Result:</h3>
              {completionStatus === true ? (
                makeCount > mehCount && makeCount > breakCount ? (
                  <div>
                    <h4>{
                      updateCompletionMessage()
                        }</h4>
                    <p>Compatibility: {compatibility}%</p>
                    <p>Makes: {makeCount}</p>
                    <p>Mehs: {mehCount}</p>
                    <p>Breaks: {breakCount}</p>
                  </div>
                ) : (
                  <div>
                    <h4>{
                      updateCompletionMessage()
                        }</h4>
                    <p>Compatibility: {compatibility}%</p>
                    <p>Makes: {makeCount}</p>
                    <p>Mehs: {mehCount}</p>
                    <p>Breaks: {breakCount}</p>
                  </div>
                )
              ) : (
                <h3>In Progress...</h3>
              )}
            </div>
          </div>
        )}
      </div>
      {/* <h1>there is recoil here{count}</h1>
      <button onClick={updateCount}>this makes the count go up, fuckos</button> */}
    </>
  );
};

export default Classic;
