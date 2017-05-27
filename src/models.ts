import { Point, Camera, Model, Scene, RenderContext, Frame} from './types'


type RectProps = { p: Point, w: number, h: number, color?: string }
type LineProps = { a: Point, b: Point, w: number, color?: string }
type CircleProps = { center: Point, radius: number, color?: string }
type PolygonProps = { points: Point[], color?: string }
type TextProps = { p: Point, message: string, size?: number, color?: string }


const Rect = (props: RectProps) => (context: RenderContext) => {
  const { ctx, frame, camera } = context

  if (!isRectVisible(props, camera)) {
    return
  }

  const p = worldToScreen(props.p, camera, frame)
  const z = frame.width/camera.width
  const w = props.w * z
  const h = props.h * z

  ctx.lineWidth = 1

  ctx.beginPath()
  ctx.fillStyle = props.color || 'black'
  ctx.strokeStyle = props.color || 'black'
  ctx.rect(p.x, p.y, w, h)
  ctx.fill()
  ctx.stroke()
}


const Polygon = (props: PolygonProps) => (context: RenderContext) => {
  const { ctx, frame, camera } = context


  // Don't bother drawing if its out of the scene.
  if (!isRectVisible(polygonBoundingRect(props.points), camera)) {
    return
  }

  const z = frame.width/camera.width

  const ps = props.points.map(p => worldToScreen(p, camera, frame))

  ctx.fillStyle = props.color || 'black'
  ctx.strokeStyle = props.color || 'black'
  ctx.lineWidth = 1

  ctx.beginPath()
  ctx.moveTo(ps[0].x, ps[0].y)

  for (let i = 1; i < ps.length; i++) {
    const p = ps[i]
    ctx.lineTo(p.x, p.y)
  }

  ctx.closePath()
  ctx.fill()
  ctx.stroke()
}


const Circle = (props: CircleProps) => (context: RenderContext) => {
  const { ctx, frame, camera } = context

  // Don't bother drawing if its out of the scene.
  if (!isRectVisible(circleBoundingRect(props), camera)) {
    return
  }

  const c = worldToScreen(props.center, camera, frame)
  const z = frame.width/camera.width
  const r = props.radius * z

  ctx.lineWidth = 1

  ctx.beginPath()
  ctx.fillStyle = props.color || 'black'
  ctx.arc(c.x, c.y, r, 0, 2 * Math.PI)
  ctx.fill()
}


const Line = (props: LineProps) => (context: RenderContext) => {
  const { ctx, frame, camera } = context

  // Don't bother drawing if its out of the scene.
  // if (!isRectVisible(lineBoundingRect(props), camera)) {
  //   return
  // }

  const a = worldToScreen(props.a, camera, frame)
  const b = worldToScreen(props.b, camera, frame)

  const z = frame.width/camera.width
  const w = props.w * z

  ctx.strokeStyle = props.color || 'black'
  ctx.lineWidth = w

  ctx.beginPath()
  ctx.moveTo(a.x, a.y)
  ctx.lineTo(b.x, b.y)
  ctx.stroke()
}


const Text = (props: TextProps) => (context: RenderContext) => {
  const { ctx } = context
  var opts = Object.assign({}, {size: 50, color: 'black'}, props)
  ctx.font = opts.size + 'px "Comic Sans MS"'
  ctx.fillStyle = opts.color
  ctx.fillText(opts.message, opts.p.x, opts.p.y)
}


const WorldText = (props: TextProps) => (context: RenderContext) => {
  const { ctx, frame, camera } = context

  // Don't bother drawing if its out of the scene.
  // if (!isRectVisible(lineBoundingRect(props), camera)) {
  //   return
  // }

  const p = worldToScreen(props.p, camera, frame)

  var opts = Object.assign({}, {size: 50, color: 'black'}, props)
  ctx.font = opts.size + 'px "Comic Sans MS"'
  ctx.fillStyle = opts.color
  ctx.fillText(opts.message, p.x, p.y)
}


export default { Rect, Polygon, Circle, Line, Text, WorldText }


function worldToScreen(p: Point, camera: Camera, frame: Frame): Point {
  const z = frame.width/camera.width
  const x = (p.x - camera.center.x) * z + frame.width/2
  const y = (p.y - camera.center.y) * z + frame.width/2

  return { x, y }
}


interface IRectangle {
  p: Point
  w: number
  h: number
}


interface ICircle {
  center: Point,
  radius: number
}


function isRectVisible(rect: IRectangle, camera: Camera): boolean {
  const { p, w, h } = rect

  return p.x + w >= camera.center.x - camera.width/2 &&
         p.x <= camera.center.x + camera.width/2 &&
         p.y + h >= camera.center.y - camera.width/2 &&
         p.y <= camera.center.y + camera.width/2
}


function circleBoundingRect(circle: ICircle): IRectangle {
  const { center, radius } = circle

  return {
    p: {
      x: center.x - radius,
      y: center.y - radius,
    },
    w: radius * 2,
    h: radius * 2
  }
}


function polygonBoundingRect(points: Point[]): IRectangle {
  let x1 = Infinity
  let x2 = -Infinity
  let y1 = Infinity
  let y2 = -Infinity

  for (let point of points) {
    if (point.x < x1) {
      x1 = point.x
    }
    if (point.x > x2) {
      x2 = point.x
    }
    if (point.y < y1) {
      y1 = point.y
    }
    if (point.y > y2) {
      y2 = point.y
    }
  }

  return {
    p: { x: x1, y: y1 },
    w: x2 - x1,
    h: y2 - y1
  }
}