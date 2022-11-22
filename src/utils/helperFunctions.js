export const handleGameStart = (gameStart, setGameStart) => {
  const notGameStart = !gameStart.gameStart;
  const newGameStartStatus = { ...gameStart, gameStart: notGameStart };
  setGameStart(newGameStartStatus);
};

export const handleIndex = (state, setter, change) => {
  let newValue = change === 'addIndex' ? state.questionIndex + 1 : state.questionIndex - 1; 
  let newIndex = { ...state, questionIndex: newValue };
  setter(newIndex);
}