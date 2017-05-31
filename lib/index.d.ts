import Game from './game';
import { Camera, Frame, Point, RenderContext } from './types';
declare var _default: {
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
    Circle: (props: {
        center: Point;
        radius: number;
        color?: string;
    }) => (context: RenderContext) => void;
    Line: (props: {
        a: Point;
        b: Point;
        w: number;
        color?: string;
    }) => (context: RenderContext) => void;
    Text: (props: {
        p: Point;
        message: string;
        size?: number;
        color?: string;
    }) => (context: RenderContext) => void;
    WorldText: (props: {
        p: Point;
        message: string;
        size?: number;
        color?: string;
    }) => (context: RenderContext) => void;
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
    Game: typeof Game;
};
export default _default;
