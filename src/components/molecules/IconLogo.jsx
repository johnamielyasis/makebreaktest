import { ReactComponent as LogoImage } from "../../assets/make or break_logo_1374.17x1080px.svg";
import { useRecoilState } from "recoil";
import { classicAtom } from "../../recoil/index.js";


const IconLogo = () => {
    const [gameStart, setGameStart] = useRecoilState(classicAtom);
    const handleGameStart = () => {
        const newGameStartStatus = { ...classicAtom, gameStart: true };
        setGameStart(newGameStartStatus);
    };
  return (
    <LogoImage
      width={47}
      height={37}
      alt="make or break icon image for homepage"
      onClick={() => {
        console.log("hw inside logo");
      }}
    />
  );
};

export default IconLogo;
