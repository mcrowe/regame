import { IPoint, IFrame, ICamera } from './types';
export declare function window2world(p: IPoint, frame: IFrame, camera: ICamera): IPoint;
export declare function window2frame(p: IPoint, frame: IFrame): IPoint;
export declare function frame2world(p: IPoint, frame: IFrame, camera: ICamera): IPoint;
export declare function world2frame(p: IPoint, frame: IFrame, camera: ICamera): {
    x: number;
    y: number;
};
