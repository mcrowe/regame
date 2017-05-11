import { Frame } from './types';
declare var _default: {
    ensure: (el: HTMLElement) => HTMLCanvasElement;
    findById: (id: string) => HTMLCanvasElement;
    getContext: (el: HTMLCanvasElement) => CanvasRenderingContext2D;
    getFrame: (el: HTMLCanvasElement) => Frame;
};
export default _default;
