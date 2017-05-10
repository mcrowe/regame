import { Point, Frame, Camera } from './types';
declare var _default: {
    window2world: (p: Point, frame: Frame, camera: Camera) => Point;
    window2frame: (p: Point, frame: Frame) => Point;
    frame2world: (p: Point, frame: Frame, camera: Camera) => Point;
    world2frame: (p: Point, frame: Frame, camera: Camera) => {
        x: number;
        y: number;
    };
};
export default _default;
