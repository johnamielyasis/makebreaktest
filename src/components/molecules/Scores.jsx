import React from 'react';
import { Score } from '../atoms/index';

const Scores = (props) => {
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