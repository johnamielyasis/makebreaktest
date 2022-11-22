import { atom } from 'recoil';

export const classicAtom = atom({
    key: 'classicState',
    default: {
        gameStart: false,
        questionIndex: 0,
        compatibility: 0
    }
})