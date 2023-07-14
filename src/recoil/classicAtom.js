import { atom } from 'recoil';

export const classicAtom = atom({
    key: 'classicState',
    default: {
        gameComplete: false,
        gameStart: false,
        gameScreenRender: false,
        numberOfQuestions: 12,
        questionDeck: [],
        questionIndex: 0,
        compatibility: 0,
        compatibilityMessage: '',
        makeCount: 0,
        breakCount: 0,
        skipCount: 0,
    }
});