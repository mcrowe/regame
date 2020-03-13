export interface IPoint {
    x: number;
    y: number;
}
export interface IFrame {
    width: number;
    height: number;
    offset: IPoint;
}
export interface ICamera {
    center: IPoint;
    width: number;
}
export interface IRenderContext {
    ctx: CanvasRenderingContext2D;
    frame: IFrame;
    camera: ICamera;
}
export declare type IModel = (context: IRenderContext) => IModel[] | void;
export declare type IScene = Array<IModel | IModel[]>;
