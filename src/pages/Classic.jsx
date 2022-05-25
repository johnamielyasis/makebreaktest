import React, { useState } from 'react';
import { Buttons, Scores, Instructions } from '../components/molecules/index.js';


const Classic = () => {
    const [makeCount, setMakeCount] = useState(0);
    const [mehCount, setMehCount] = useState(0);
    const [breakCount, setBreakCount] = useState(0);
    const [questionCount, setQuestionCount] = useState(1);
    const [winConditionCount, setWinConditionCount] = useState(0);
    const [completionStatus, setCompletionStatus] = useState(false);
    const [difficulty, setDifficulty] = useState('');

    const compatibility = Math.ceil((makeCount / winConditionCount) * 100);

    const updateMakeCount = () => setMakeCount(makeCount + 1);
    const updateMehCount = () => setMehCount(mehCount + 1);
    const updateBreakCount = () => setBreakCount(breakCount + 1);
    const updateQuestionCount = () => setQuestionCount(questionCount + 1);

    

    const checkCompletion = () => {
        if (winConditionCount === questionCount) {
            setCompletionStatus(true);
        };
    };

    const playAgain = () => {
        setCompletionStatus(false);
        setDifficulty('');
        setMakeCount(0);
        setBreakCount(0);
        setMehCount(0);
        questions.sort(function () {
            return Math.random() - .5
        });
        setQuestionCount(1);
    };

    const updateEasyDifficulty = () => {
        setDifficulty('easy');
        // switch back to 11 when done with testing
        setWinConditionCount(1);
    };

    const updateMildDifficulty = () => {
        setDifficulty('mild');
        setWinConditionCount(13);
    };

    const updateHardDifficulty = () => {
        setDifficulty('hard');
        setWinConditionCount(15);
    };

    // these three functions could be made into a single one
    const updateMake = () => {
        updateMakeCount();
        updateQuestionCount();
        checkCompletion();
    };

    const updateMeh = () => {
        updateMehCount();
        updateQuestionCount();
        checkCompletion();
    };

    const updateBreak = () => {
        updateBreakCount();
        updateQuestionCount();
        checkCompletion();
    };
    //questions will need weight 
    const questions = [
        'Do you like pineapple on pizza?',
        'What is your love language?',
        'Why do you think you are single? (if you are)',
        'What do you hope to gain from dating?',
        'What are your current personal goals?',
        'What are 3 traits people you are dating must have?',
        'Are you Gordon Ramsay in the kitchen?',
        'What are you most grateful for?',
        'Spontaneous adventure? Or a well-planned one?',
        'What are your tastes in music?',
        'How do you like your coffee?',
        'What is your boba order?',
        'Are you lactose intolerant?',
        'What color do you think my aura is?',
        'Do you believe in astrology?',
        'Are you religious?',
        'Name one thing that is a dealbreaker for you.',
        'Do you stack your dishes and plates after eating at a restaurant?',
        'Plant, fur, or real babies?',
        'How important is sex in your relationship?',
        'What are your dietary preferences?',
        'What are your thoughts about the Trump administration?',
        'How are you with finances?',
        'Do you like Anime?',
        'Besides work, what occupies your time?',
        'Staying in vs. going out?',
        'Have you ever cheated on someone before?',
        'What is your definition of cheating?',
        'Does size matter to you?'
    ].sort(function () {
        return Math.random() - .5
    });

    console.log('win condition count: ', winConditionCount, 'question count: ', questionCount, 'completion status:', completionStatus, 'make count:', makeCount, 'break count:', breakCount, 'meh count', mehCount);

    return (
        <>
            <div>
                <h2>Classic Mode</h2>
                {difficulty === '' ? (
                    <div>
                        <h3>Select Difficulty Level:</h3>
                        <button onClick={updateEasyDifficulty}>Easy</button>
                        <button onClick={updateMildDifficulty}>Mild</button>
                        <button onClick={updateHardDifficulty}>Hard</button>
                    </div>
                ) : completionStatus ? 
                    <div>
                        <button onClick={playAgain}>Play again</button>
                    </div> 
                        :
                    <div>
                        <h3>Question:</h3>
                        <p>{questions[questionCount]}</p>
                        <button onClick={updateMake}>Make</button>
                        <button onClick={updateMeh}>Meh</button>
                        <button onClick={updateBreak}>Break</button>
                    </div>
                }
                <div>
                    <h3>Result:</h3>
                    {completionStatus === true ?
                        (makeCount > mehCount && makeCount > breakCount ?
                            <div>
                                <h4>You Win!</h4>
                                <p>Compatibility: {compatibility}%</p>
                                <p>Makes: {makeCount}</p>
                                <p>Mehs: {mehCount}</p>
                                <p>Breaks: {breakCount}</p>
                            </div>
                            : <div>
                                <h4>You Lose!</h4>
                                <p>Compatibility: {compatibility}%</p>
                                <p>Makes: {makeCount}</p>
                                <p>Mehs: {mehCount}</p>
                                <p>Breaks: {breakCount}</p>
                            </div>
                        )
                    : <h3>In Progress...</h3>
                    }

                </div>
                <Instructions />
            </div>
        </>
    );
};

export default Classic;