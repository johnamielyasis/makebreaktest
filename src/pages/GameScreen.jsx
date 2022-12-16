import React from 'react';
import { MobileNavbar } from '../components/organisms/index.js';
import { QuestionCard } from '../components/molecules/index.js';
import { GameButtons } from '../components/organisms/index.js';
import styled from '@emotion/styled';

const GameScreenWrapper = styled.div`
    margin: 0 auto;
    max-width: 600px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 45px 20px;
    box-sizing: border-box;
`

const GameScreen = () => {
    return (
        <GameScreenWrapper>
            <MobileNavbar />
            <QuestionCard />
            <GameButtons />
        </GameScreenWrapper>
    )
}

export default GameScreen;