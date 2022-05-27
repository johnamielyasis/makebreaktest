import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
`;

const Button = (props) => {
    return (
        <>
            <StyledButton>{props.buttonName}</StyledButton>
        </>
    );
};

export default Button;