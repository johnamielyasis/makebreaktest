


export const handleGameStart = (gameStart, setGameStart, classicAtom) => {
  const notGameStart = !gameStart.gameStart;
  const newGameStartStatus = { ...classicAtom, gameStart: notGameStart };
  setGameStart(newGameStartStatus);
};

export function helloWorlder() {
  console.log("hw");
}

export function helloWorlder2() {
  console.log("hw2");
}
