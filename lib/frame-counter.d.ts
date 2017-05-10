export default class FrameCounter {
    frames: number;
    t0: number;
    constructor();
    tick(): void;
    getRate(): number;
}
