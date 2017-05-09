import { Point, RenderContext } from './types';
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
    Text: (props: {
        p: Point;
        message: string;
        size?: number;
        color?: string;
    }) => (context: RenderContext) => void;
};
export default _default;
