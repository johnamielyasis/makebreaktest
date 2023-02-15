import { atom } from 'recoil';

export const classicAtom = atom({
    key: 'classicState',
    default: {
        gameComplete: false,
        gameScreenRender: false,
        gameStart: false,
        numberOfQuestions: 12,
        questionIndex: 0,
        compatibility: 0,
        compatibilityMessage: '',
        makeCount: 0,
        breakCount: 0,
        skipCount: 0,
    }
});