import { Camera, Model, Frame, Point, RenderContext } from './types';
declare var _default: {
    Canvas: {
        ensure: (el: HTMLElement) => HTMLCanvasElement;
        findById: (id: string) => HTMLCanvasElement;
        getContext: (el: HTMLCanvasElement) => CanvasRenderingContext2D;
        getFrame: (el: HTMLCanvasElement) => Frame;
    };
    Coord: {
        window2world: (p: Point, frame: Frame, camera: Camera) => Point;
        window2frame: (p: Point, frame: Frame) => Point;
        frame2world: (p: Point, frame: Frame, camera: Camera) => Point;
        world2frame: (p: Point, frame: Frame, camera: Camera) => {
            x: number;
            y: number;
        };
    };
    makeGame: <T>(el: HTMLElement, update: (state: T, dt: number) => void, render: (state: T) => (Model | Model[])[], getCamera: (state: T) => Camera, initialState: T) => {
        getFPS(): number;
    };
    Circle: (props: {
        center: Point;
        radius: number;
        color?: string;
    }) => (context: RenderContext) => void;
    Text: (props: {
        p: Point;
        message: string;
        size?: number;
        color?: string;
    }) => (context: RenderContext) => void;
    Rect: (props: {
        p: Point;
        w: number;
        h: number;
        color?: string;
    }) => (context: RenderContext) => void;
    Polygon: (props: {
        points: Point[];
        color?: string;
    }) => (context: RenderContext) => void;
};
export default _default;
