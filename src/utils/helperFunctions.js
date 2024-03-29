import Data from "../data.json"

export const handleCompletionStatus = (state, setter, compatibility, compatibilityMessage) => {
  const notCompletionStatus = !state.gameComplete;
  const newCompletionStatus = { ...state, gameComplete: notCompletionStatus, compatibility: compatibility, compatibilityMessage: compatibilityMessage };
  console.log("cs", newCompletionStatus);
  setter(newCompletionStatus);
};

export const handleGameStart = (gameStart, setGameStart) => {
  const notGameStart = !gameStart.gameStart;
  const newGameStartStatus = { ...gameStart, gameStart: notGameStart };
  setGameStart(newGameStartStatus);
};

export const handleIndex = (state, setter, change, action) => {
  const newValue =
    change === "addIndex" ? state.questionIndex + 1 : state.questionIndex - 1;

  if (action === "make") {
    const newMakeValue = state.makeCount + 1;
    const newIndex = {
      ...state,
      questionIndex: newValue,
      makeCount: newMakeValue,
    };
    setter(newIndex);
  }

  if (action === "break") {
    const newBreakValue = state.breakCount + 1;
    const newIndex = {
      ...state,
      questionIndex: newValue,
      breakCount: newBreakValue,
    };
    setter(newIndex);
  }

  if (action === "skip") {
    const newSkipValue = state.skipCount + 1;
    const newIndex = {
      ...state,
      questionIndex: newValue,
      skipCount: newSkipValue,
    };
    setter(newIndex);
  }
};

export const handleGameScreenRender = (state, setter) => {
  const notGameScreenRender = !state.gameScreenRender;
  const newGameScreenRender = { ...state, gameScreenRender: notGameScreenRender };
  setter(newGameScreenRender);
};

export const handleGameBeginning = (state, setter, data) => {
  const notGameScreenRender = !state.gameScreenRender;
  const notGameStarted = !state.gameStart;
  const shuffledDeck = data.questions.sort(function () {
    return Math.random() - 0.5;
  });
  const gameHasBegun = { ...state, gameScreenRender: notGameScreenRender, gameStart: notGameStarted, questionDeck: shuffledDeck };
  setter(gameHasBegun);
};

export const handleReset = (state, setter, resetToMenu) => {
  const resetState = { ...state, makeCount: 0, breakCount: 0, skipCount: 0, questionIndex: 0, gameStart: true, gameComplete: false, gameScreenRender: true};

  if (resetToMenu) {
    const resetState = { ...state, makeCount: 0, breakCount: 0, skipCount: 0, questionIndex: 0, gameStart: false, gameComplete: false, gameScreenRender: false};
    setter(resetState);
    return;
  };

  setter(resetState);
};

export const handleAdvanceTutorialIndex = (state, setter, data) => {
  if (state !== data.length - 1) {
    setter(state + 1);
  }
}

export const handleDecreaseTutorialIndex = (state, setter) => {
    setter(state - 1);
};