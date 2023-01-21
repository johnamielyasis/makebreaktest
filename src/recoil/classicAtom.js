import { atom } from 'recoil';

export const classicAtom = atom({
    key: 'classicState',
    default: {
        gameStart: false,
        gameComplete: false,
        numberOfQuestions: 12,
        questionIndex: 0,
        compatibility: 0,
        compatibilityMessage: '',
        makeCount: 0,
        breakCount: 0,
        skipCount: 0,
    }
});