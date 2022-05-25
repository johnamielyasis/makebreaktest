import React from 'react';
import styled from 'styled-components';

const ColoredCard = styled.div`
    background-color: ${props => props.inputColor || "white"};
    height: 100px;
    width: 7%;
`;

const RedCard = () => {
    return (
        <>
            <ColoredCard inputColor="red">
            </ColoredCard>
        </>
    );
}

export default RedCard;