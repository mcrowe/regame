import Vec from '@mcrowe/vector2'
import { IPoint, IFrame, ICamera } from './types'

export function window2world(p: IPoint, frame: IFrame, camera: ICamera) {
  const pFrame = window2frame(p, frame)
  return frame2world(pFrame, frame, camera)
}

export function window2frame(p: IPoint, frame: IFrame): IPoint {
  return Vec.sub(p, frame.offset)
}

export function frame2world(p: IPoint, frame: IFrame, camera: ICamera): IPoint {
  const s = (camera.width / frame.width) * window.devicePixelRatio
  const cameraHeight = (camera.width * frame.height) / frame.width

  const x = p.x * s + camera.center.x - camera.width / 2
  const y = p.y * s + camera.center.y - cameraHeight / 2

  return { x, y }
}

export function world2frame(p: IPoint, frame: IFrame, camera: ICamera) {
  const s = frame.width / camera.width / window.devicePixelRatio

  const x = (p.x - camera.center.x) * s + frame.width / 2
  const y = (p.y - camera.center.y) * s + frame.height / 2

  return { x, y }
}
