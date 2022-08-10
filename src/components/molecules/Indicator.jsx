import styled from 'styled-components';
import { FaLongArrowAltUp } from 'react-icons/fa';
const IndicatorContainer = styled.div`
    height:100px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const ArrowContainer = styled.div`
    height:100px;
    width: 7%;
`

// const Arrow = styled.div`
//     height:100px;
//     width: 7%;
// `

const Indicator = () => {
    return (
        <IndicatorContainer>
            <ArrowContainer />
            <ArrowContainer />
            <ArrowContainer />
            <ArrowContainer />
            <ArrowContainer />
            <FaLongArrowAltUp size={70} />
            <ArrowContainer />
            <ArrowContainer />
            <ArrowContainer />
            <ArrowContainer />
            <ArrowContainer />
        </IndicatorContainer>
    );
};

export default Indicator;