import { Card, RedCard, GreenCard } from '../atoms/index';
import styled from 'styled-components';

const GaugeContainer = styled.div`
    height:100px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`
const Gauge = () => {
    return (
        <>
            <GaugeContainer>
                <RedCard />
                <RedCard />
                <RedCard />
                <RedCard />
                <RedCard />
                <Card />
                <GreenCard />
                <GreenCard />
                <GreenCard />
                <GreenCard />
                <GreenCard />
            </GaugeContainer>
        </>
    );
};

export default Gauge;