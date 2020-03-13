import { IFrame } from './types'

export function ensure(el: HTMLElement | null) {
  if (!el) {
    throw new Error('Missing canvas element')
  }
  return <HTMLCanvasElement>el
}

export function findById(id: string): HTMLCanvasElement {
  return ensure(document.getElementById(id))
}

export function getContext(el: HTMLCanvasElement): CanvasRenderingContext2D {
  return <CanvasRenderingContext2D>el.getContext('2d')
}

export function getFrame(el: HTMLCanvasElement): IFrame {
  return {
    height: el.height,
    width: el.width,
    offset: { x: el.offsetLeft, y: el.offsetTop }
  }
}
