import React, { useState } from "react";
import Modal from "react-modal";
import { Instructions } from "../components/molecules/index.js";
import Data from "../data.json";

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

const questions = [
  "Do you like pineapple on pizza?",
  "What is your love language?",
  "Why do you think you are single? (if you are)",
  "What do you hope to gain from dating?",
  "What are your current personal goals?",
  "What are 3 traits people you are dating must have?",
  "Are you Gordon Ramsay in the kitchen?",
  "What are you most grateful for?",
  "Spontaneous adventure? Or a well-planned one?",
  "What are your tastes in music?",
  "How do you like your coffee?",
  "What is your boba order?",
  "Are you lactose intolerant?",
  "What color do you think my aura is?",
  "Do you believe in astrology?",
  "Are you religious?",
  "Name one thing that is a dealbreaker for you.",
  "Do you stack your dishes and plates after eating at a restaurant?",
  "Plant, fur, or real babies?",
  "How important is sex in your relationship?",
  "What are your dietary preferences?",
  "What are your thoughts about the Trump administration?",
  "How are you with finances?",
  "Do you like Anime?",
  "Besides work, what occupies your time?",
  "Staying in vs. going out?",
  "Have you ever cheated on someone before?",
  "What is your definition of cheating?",
  "Does size matter to you?",
  "Where do you stand on marriage?",
  "What are your thoughts about the Biden administration?",
  "Where do you stand on the whole gun issue?",
  "Is physical attraction important to you?",
  "What type of intelligence do you find attractive, if at all?",
  "Do you speak any other languages?",
].sort(function () {
  return Math.random() - 0.5;
});

const Classic = () => {
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
    compatibility
  );

  return (
    <>
      <div>
        <h2>Classic Mode</h2>
        {started === false ? (
          <div>
            <button onClick={openModal}>Instructions</button>
            <Modal
              isOpen={modalIsOpen}
              // onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={modalStyles}
              contentLabel="Example Modal"
              ariaHideApp={false}
            >
              <Instructions />
              <button onClick={closeModal}>Close</button>
            </Modal>
            <br />
            <button onClick={handleStarted}>Play</button>
          </div>
        ) : (
          <div>
            {difficulty === "" ? (
              <div>
                <h3>Select Difficulty Level:</h3>
                <button onClick={updateEasyDifficulty}>Easy</button>
                <button onClick={updateMildDifficulty}>Mild</button>
                <button onClick={updateHardDifficulty}>Hard</button>
                <button onClick={updateEndlessDifficulty}>Endless</button>
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
    </>
  );
};

export default Classic;
