import { atom } from 'recoil';

export const classicAtom = atom({
    key: 'classicState',
    default: {
        questionIndex: 0,
    }
})