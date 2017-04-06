export interface Point {
    x: number;
    y: number;
}
export interface Frame {
    width: number;
    height: number;
    offset: Point;
}
export interface Camera {
    center: Point;
    width: number;
}
export interface RenderContext {
    ctx: CanvasRenderingContext2D;
    frame: Frame;
    camera: Camera;
}
export declare type Model = (context: RenderContext) => Model[] | void;
export declare type Scene = Array<Model | Model[]>;
