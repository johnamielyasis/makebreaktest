import React from 'react';
import styled from 'styled-components';

const ColoredCard = styled.div`
    background-color: ${props => props.inputColor || "white"};
    height: 100px;
    width: 7%;
`
const GreenCard = () => {
    return (
        <>
            <ColoredCard inputColor="green">
            </ColoredCard>
        </>
    );
}

export default GreenCard;