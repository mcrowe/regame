import { IScene, ICamera } from './types';
export declare type IUpdater<T> = (state: T, dt: number) => void;
export declare type IRenderer<T> = (state: T) => IScene;
export declare type ICameraMapper<T> = (state: T) => ICamera;
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
    doRender(): IScene;
    doDraw(scene: IScene, camera: ICamera): void;
    getReport(): {
        fps: number;
        draw: number;
        render: number;
        update: number;
    };
    resetDiagnostics(): void;
}
export default Game;
