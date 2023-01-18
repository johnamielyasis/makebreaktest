export const handleButtonAction = (state, setter, buttonAction) => {
  if (buttonAction === "make") {
    const makeCountInc = state.makeCount + 1;
    const newMakeCountState = { ...state, makeCount: makeCountInc };
    setter(newMakeCountState);
    console.log("this is button action", newMakeCountState);
  }
  if (buttonAction === "break") {
    const breakCountInc = state.breakCount + 1;
    const newBreakCountState = { ...state, breakCount: breakCountInc };
    setter(newBreakCountState);
    console.log("this is button action", newBreakCountState);
  }
  if (buttonAction === "skip") {
    const skipCountInc = state.skipCount + 1;
    const newSkipCountState = { ...state, skipCount: skipCountInc };
    setter(newSkipCountState);
    console.log("this is button action", newSkipCountState);
  }
};

export const handleCompletionStatus = (state, setter) => {
  const notCompletionStatus = !state.gameComplete;
  const newCompletionStatus = { ...state, gameComplete: notCompletionStatus };
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
    // if (newIndex.numberOfQuestions === newIndex.questionIndex) {
    //   handleCompletionStatus(state, setter);
    //   console.log(
    //     "FIRE NOW",
    //     newIndex.numberOfQuestions,
    //     newIndex.questionIndex
    //   );
    //   console.log("_________", newIndex);
    // } 
  }

  if (action === "break") {
    const newBreakValue = state.breakCount + 1;
    const newIndex = {
      ...state,
      questionIndex: newValue,
      breakCount: newBreakValue,
    };
    setter(newIndex);
    if (newIndex.numberOfQuestions === newIndex.questionIndex) {
      handleCompletionStatus(state, setter);
      console.log(
        "FIRE NOW",
        newIndex.numberOfQuestions,
        newIndex.questionIndex
      );
      console.log("_________", newIndex);
    }
  }

  if (action === "skip") {
    const newSkipValue = state.skipCount + 1;
    const newIndex = {
      ...state,
      questionIndex: newValue,
      skipCount: newSkipValue,
    };
    setter(newIndex);
    if (newIndex.numberOfQuestions === newIndex.questionIndex) {
      handleCompletionStatus(state, setter);
      console.log(
        "FIRE NOW",
        newIndex.numberOfQuestions,
        newIndex.questionIndex
      );
      console.log("_________", newIndex);
    }
  }
};
