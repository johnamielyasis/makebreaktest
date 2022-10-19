


export const handleGameStart = (oldAtom, setter) => {
  const newGameStartStatus = { oldAtom, gameStart: true };
  setter(newGameStartStatus);
};

export function helloWorlder() {
  console.log("hw");
}

export function helloWorlder2() {
  console.log("hw2");
}
