import styled from 'styled-components';
import { Gauge, Indicator } from '../components/molecules/index.js';

const Temperature = () => {
    return (
        <>
            <h2>Temperature Mode</h2>
            <Gauge />
            <Indicator />
            <p>Pineapple on Pizza?</p>
            <button>Make</button>
            <button>Break</button>
        </>
    );
};

export default Temperature;