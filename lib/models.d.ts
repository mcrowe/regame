import { IPoint, IRenderContext } from './types';
interface IRectProps {
    p: IPoint;
    w: number;
    h: number;
    color?: string;
}
interface ILineProps {
    a: IPoint;
    b: IPoint;
    w: number;
    color?: string;
}
interface ICircleProps {
    center: IPoint;
    radius: number;
    color?: string;
}
interface IPolygonProps {
    points: IPoint[];
    color?: string;
}
interface ITextProps {
    p: IPoint;
    message: string;
    size?: number;
    color?: string;
}
export declare const Rect: (props: IRectProps) => (context: IRenderContext) => void;
export declare const Polygon: (props: IPolygonProps) => (context: IRenderContext) => void;
export declare const Circle: (props: ICircleProps) => (context: IRenderContext) => void;
export declare const Line: (props: ILineProps) => (context: IRenderContext) => void;
export declare const Text: (props: ITextProps) => (context: IRenderContext) => void;
export declare const WorldText: (props: ITextProps) => (context: IRenderContext) => void;
export {};
