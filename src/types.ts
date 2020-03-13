export interface IPoint {
  x: number
  y: number
}
export interface IFrame {
  width: number
  height: number
  offset: IPoint
}
export interface ICamera {
  center: IPoint
  width: number
}
export interface IRenderContext {
  ctx: CanvasRenderingContext2D
  frame: IFrame
  camera: ICamera
}
export type IModel = (context: IRenderContext) => IModel[] | void
export type IScene = Array<IModel | IModel[]>
