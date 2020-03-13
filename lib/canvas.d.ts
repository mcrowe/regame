import { IFrame } from './types';
export declare function ensure(el: HTMLElement | null): HTMLCanvasElement;
export declare function findById(id: string): HTMLCanvasElement;
export declare function getContext(el: HTMLCanvasElement): CanvasRenderingContext2D;
export declare function getFrame(el: HTMLCanvasElement): IFrame;
