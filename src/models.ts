import { Point, Camera, Model, Scene, RenderContext } from './types'


type RectProps = { p: Point, w: number, h: number, color?: string }
type CircleProps = { center: Point, radius: number, color?: string }
type TextProps = { p: Point, message: string, size?: number, color?: string }


const Rect = (props: RectProps) => (context: RenderContext) => {
  const { ctx, frame, camera } = context

  const z = frame.width/camera.width
  const sx = (props.p.x - camera.center.x) * z + frame.width/2
  const sy = (props.p.y - camera.center.y) * z + frame.width/2
  const sw = props.w * z
  const sh = props.h * z

  ctx.beginPath()
  ctx.fillStyle = props.color || 'black'
  ctx.rect(sx, sy, sw, sh)
  ctx.fill()
}


const Circle = (props: CircleProps) => (context: RenderContext) => {
  const { ctx, frame, camera } = context

  const z = frame.width/camera.width
  const sx = (props.center.x - camera.center.x) * z + frame.width/2
  const sy = (props.center.y - camera.center.y) * z + frame.width/2
  const sr = props.radius * z

  ctx.beginPath()
  ctx.fillStyle = props.color || 'black'
  ctx.arc(sx, sy, sr, 0, 2 * Math.PI)
  ctx.fill()
}


const Text = (props: TextProps) => (context: RenderContext) => {
  const { ctx } = context
  var opts = Object.assign({}, {size: 50, color: 'black'}, props)
  ctx.font = opts.size + 'px "Comic Sans MS"'
  ctx.fillStyle = opts.color
  ctx.fillText(opts.message, opts.p.x, opts.p.y)
}


export default { Rect, Circle, Text }