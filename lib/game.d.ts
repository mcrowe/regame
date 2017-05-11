import { Scene, Camera, Model } from './types';
export declare type IUpdater<T> = (state: T, dt: number) => void;
export declare type IRenderer<T> = (state: T) => Scene;
export declare type ICameraMapper<T> = (state: T) => Camera;
export interface IDiagnostics {
    lastReportedAt: number;
    numFrames: number;
    totalUpdateTime: number;
    totalRenderTime: number;
    totalDrawTime: number;
}
declare class Game<T> {
    state: T;
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    update: IUpdater<T>;
    render: IRenderer<T>;
    getCamera: ICameraMapper<T>;
    lastFrameAt: number;
    diagnostics: IDiagnostics;
    constructor(el: HTMLElement | null, update: IUpdater<T>, render: IRenderer<T>, getCamera: ICameraMapper<T>, initialState: T);
    loop(): void;
    doUpdate(dt: any): void;
    doRender(): (Model | Model[])[];
    doDraw(scene: Scene, camera: Camera): void;
    getReport(): {
        fps: number;
        draw: number;
        render: number;
        update: number;
    };
    resetDiagnostics(): void;
}
export default Game;
