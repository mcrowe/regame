import Vec from '@mcrowe/vector2'
import { Point, Frame, Camera } from './types'


function window2world(p: Point, frame: Frame, camera: Camera) {
  const pFrame = window2frame(p, frame)
  return frame2world(pFrame, frame, camera)
}


function window2frame(p: Point, frame: Frame): Point {
  return Vec.sub(p, frame.offset)
}


function frame2world(p: Point, frame: Frame, camera: Camera): Point {
  const s = camera.width/frame.width * window.devicePixelRatio
  const cameraHeight = camera.width * frame.height/frame.width

  const x = p.x*s + camera.center.x - camera.width/2
  const y = p.y*s + camera.center.y - cameraHeight/2

  return { x, y }
}


function world2frame(p: Point, frame: Frame, camera: Camera) {
  const s = frame.width/camera.width / window.devicePixelRatio

  const x = (p.x - camera.center.x)*s + frame.width/2
  const y = (p.y - camera.center.y)*s + frame.height/2

  return { x, y }
}


export default { window2world, window2frame, frame2world, world2frame }