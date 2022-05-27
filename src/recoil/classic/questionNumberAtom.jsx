import { RecoilRoot, atom } from "recoil";


const questionNumberState = atom({
    key: 'questionNumberState',
    default: 3
});

export default questionNumberState;