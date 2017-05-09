import { Camera, Model } from './types';
declare var _default: {
    make: <T>(el: HTMLElement, update: (state: T, dt: number) => void, render: (state: T) => (Model | Model[])[], getCamera: (state: T) => Camera, initialState: T) => {
        getFPS(): number;
    };
};
export default _default;
