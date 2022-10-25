import { ReactComponent as LogoImage } from "../../assets/make or break_logo_1374.17x1080px.svg";
import {
  useRecoilState
    } from 'recoil';
import { classicAtom } from '../../recoil/index.js';
import { handleGameStart } from "../../utils/helperFunctions.js";


const IconLogo = () => {
    const [gameStart, setGameStart] = useRecoilState(classicAtom);
    
  return (
    <LogoImage
      width={47}
      height={37}
      alt="make or break icon image for homepage"
      onClick={() => {
        handleGameStart(gameStart, setGameStart, classicAtom);
      }}
    />
  );
};

export default IconLogo;
