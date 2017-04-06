import { Frame } from './types'


function ensure(el: HTMLElement | null) {
  if (!el) {
    throw new Error('Missing canvas element')
  }
  return <HTMLCanvasElement> el
}


function findById(id: string): HTMLCanvasElement {
  return ensure(document.getElementById(id))
}


function getContext(el: HTMLCanvasElement): CanvasRenderingContext2D {
  return <CanvasRenderingContext2D> el.getContext('2d')
}


function getFrame(el: HTMLCanvasElement): Frame {
  return {
    height: el.height,
    width: el.width,
    offset: { x: el.offsetLeft, y: el.offsetTop }
  }
}


export default { ensure, findById, getContext, getFrame }
