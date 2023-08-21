import React from 'react';

const Instructions = (props) => {
    return (
        <>
            <h3>How to Play:</h3>
            <p>
                <ul>
                    <li>Choose a difficulty level.</li>
                    <li>Have both players answer the question:
                    <ul>
                            <li>If both players can reconcile their respective answers, it's a make :)</li>
                            <li>If both players have a disagreement with their answers, it's a break :(</li>
                            <li>If both players have whatever feelings about their answers, or wish to skip a question, it's a meh :l</li>
                        </ul>
                    </li>
                    <li>At the end of 11 (easy)/ 13 (medium) / 15 (hard) questions / however much you feel like, find out which result has the highest amount of votes. That is your love compatibility result!</li>
                </ul>
            </p>
        </>
    );
};

export default Instructions;