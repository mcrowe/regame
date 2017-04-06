import Util from './util'
import Canvas from './canvas'
import FrameCounter from './frame-counter'
import { Scene, Camera, Frame, Model } from './types'


type Updater<T> = (state: T, dt: number) => void
type Renderer<T> = (state: T) => Scene
type CameraMapper<T> = (state: T) => Camera


function make<T>(el: HTMLElement | null,
                 update: Updater<T>,
                 render: Renderer<T>,
                 getCamera: CameraMapper<T>,
                 initialState: T) {

  const canvas = Canvas.ensure(el)
  const ctx = Canvas.getContext(canvas)

  const state = initialState

  let t = Date.now()

  const frameCounter = new FrameCounter()

  function loop() {
    frameCounter.tick()
    const now = Date.now()
    const dt = now - t
    t = now

    update(state, dt)
    const scene = render(state)
    const camera = getCamera(state)
    draw(canvas, ctx, scene, camera)

    requestAnimationFrame(loop)
  }
  loop()

  return {
    getFPS() {
      return frameCounter.getRate()
    }
  }
}


export default { make }


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