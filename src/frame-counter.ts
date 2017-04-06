export default class FrameCounter {

  frames: number
  t0: number

  constructor() {
    this.frames = 0
    this.t0 = Date.now()
  }

  tick() {
    this.frames += 1
  }

  getRate() {
    const t = Date.now()
    const dt = t - this.t0

    const rate = 1000 * this.frames / dt

    this.t0 = t
    this.frames = 0

    return rate
  }

}