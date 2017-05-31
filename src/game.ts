import Util from './util'
import Canvas from './canvas'
import { Scene, Camera, Frame, Model } from './types'


export type IUpdater<T> = (state: T, dt: number) => void
export type IRenderer<T> = (state: T) => Scene
export type ICameraMapper<T> = (state: T) => Camera


export interface IDiagnostics {
  lastReportedAt: number
  numFrames: number
  totalUpdateTime: number
  totalRenderTime: number
  totalDrawTime: number
}


class Game<T> {

  state: T
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  update: IUpdater<T>
  render: IRenderer<T>
  getCamera: ICameraMapper<T>
  lastFrameAt: number
  diagnostics: IDiagnostics

  constructor(el: HTMLElement | null, update: IUpdater<T>, render: IRenderer<T>, getCamera: ICameraMapper<T>, initialState: T) {
    this.update = update
    this.render = render
    this.getCamera = getCamera
    this.canvas = Canvas.ensure(el)
    this.ctx = Canvas.getContext(this.canvas)
    this.state = initialState
    this.lastFrameAt = Date.now()
    this.resetDiagnostics()
    this.loop()
  }

  loop() {
    requestAnimationFrame(() => this.loop())

    this.diagnostics.numFrames += 1

    const now = Date.now()
    const dt = now - this.lastFrameAt
    this.lastFrameAt = now

    this.doUpdate(dt)
    const scene = this.doRender()
    const camera = this.getCamera(this.state)
    this.doDraw(scene, camera)
  }

  doUpdate(dt) {
    const t0 = Date.now()
    this.update(this.state, dt)
    this.diagnostics.totalUpdateTime += Date.now() - t0
  }

  doRender() {
    const t0 = Date.now()
    const scene = this.render(this.state)
    this.diagnostics.totalRenderTime += Date.now() - t0
    return scene
  }

  doDraw(scene: Scene, camera: Camera) {
    resize(this.canvas)

    const t0 = Date.now()
    const frame = Canvas.getFrame(this.canvas)



    clear(this.ctx, frame)

    for (let model of getSceneModels(scene)) {
      model({ctx: this.ctx, frame, camera})
    }

    this.diagnostics.totalDrawTime += Date.now() - t0
  }

  getReport() {
    const { lastReportedAt, numFrames, totalDrawTime, totalRenderTime, totalUpdateTime } = this.diagnostics

    const dt = Date.now() - lastReportedAt

    const report = {
      fps: numFrames * 1000 / dt,
      draw: totalDrawTime / numFrames,
      render: totalRenderTime / numFrames,
      update: totalUpdateTime / numFrames
    }

    this.resetDiagnostics()

    return report
  }

  resetDiagnostics() {
    this.diagnostics = {
      lastReportedAt: Date.now(),
      numFrames: 0,
      totalUpdateTime: 0,
      totalRenderTime: 0,
      totalDrawTime: 0
    }
  }

}


export default Game


function draw(canvas: HTMLCanvasElement,
              ctx: CanvasRenderingContext2D,
              scene: Scene,
              camera: Camera) {
  const frame = Canvas.getFrame(canvas)
  clear(ctx, frame)

  for (let model of getSceneModels(scene)) {
    model({ctx, frame, camera})
  }
}


function clear(ctx: CanvasRenderingContext2D, frame: Frame) {
  ctx.clearRect(0, 0, frame.width, frame.height)
  ctx.fillStyle = '#000000'
}


function getSceneModels(scene: Scene): Model[] {
  return Util.flatten(scene)
}


function resize(canvas: HTMLCanvasElement) {
  const dp = window.devicePixelRatio

  const displayWidth = Math.floor(canvas.clientWidth * dp)
  const displayHeight = Math.floor(canvas.clientHeight * dp)

  if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
    canvas.width = displayWidth
    canvas.height = displayHeight
  }
}