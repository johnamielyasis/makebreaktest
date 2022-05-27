import React from 'react';
import { Score } from '../atoms/index';

const Scores = () => {
    return (
        <>
            <p>
                <Score scoreName="Makes" />
                <Score scoreName="Ehhhs" />
                <Score scoreName="Breaks" />
            </p>
        </>
    );
};

export default Scores;