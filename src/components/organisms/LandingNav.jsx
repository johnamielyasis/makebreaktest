import { classicAtom } from "../../recoil/index.js";
import { handleGameScreenRender, handleGameStart } from "../../utils";
import styled from "@emotion/styled";
import { MdArrowForwardIos } from "react-icons/md";
import Typography from "@mui/material/Typography";
import { useRecoilState } from "recoil";


const LandingNavWrapper = styled.div`
  margin-left: auto;
  margin-right: 0px;
`;

const NavDiv = styled.div`
  display: flex;
  align-items: center;
`;

const LandingNav = () => {
  const [classicStates, setClassicStates] = useRecoilState(classicAtom);
  const hasGameStarted = classicStates.gameStart;

  return (
    <LandingNavWrapper>
        {hasGameStarted ? 
        (<NavDiv
        onClick={() => handleGameScreenRender(classicStates, setClassicStates)}>
          <Typography
            style={{
              color: "black",
              letter: "30%",
              letterSpacing: "0.3em",
              lineHeight: "18.75px",
              fontSize: "14px",
            }}
          >
            CONTINUE
          </Typography>
          <MdArrowForwardIos
            style={{
              fontSize: "28px",
              margin: "0px 24px 0px 0px"
            }}
          />
        </NavDiv>) : ''
    }
      
    </LandingNavWrapper>
  );
};

export default LandingNav;
