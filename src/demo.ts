import Regame from './'
import { Scene, Camera } from './types'


interface IState {}


const state: IState = {}


const canvas = Regame.Canvas.findById('canvas')


const game = new Regame.Game<IState>(canvas, update, render, getCamera, state)



function render(_state: IState): Scene {
  return [
    Regame.Circle({radius: 10, center: {x: 0, y: 0}, color: '#f00'}),
    Regame.Rect({p: {x: 20, y: 0}, w: 10, h: 10, color: '#0f0'}),
    Regame.Polygon({points: [{x: -20, y: -20}, {x: -20, y: -40}, {x: 20, y: -40}, {x: 20, y: -20}], color: '#00f'}),
    // Off-screen poly
    Regame.Polygon({points: [{x: -100, y: 0}, {x: -51, y: 0}, {x: -51, y: -40}], color: '#00f'}),
    Regame.Text({p: {x: 0, y: 580}, message: 'Hello World!'})
  ]
}


function update(_state: IState) {
  let n = 0
  for (let i = 0; i < 20000000; i++) {
    n += i
  }
}


function getCamera(_state: IState): Camera {
  return {
    center: { x: 0, y: 0 },
    width: 100
  }
}

setInterval(() => {
  console.log(game.getReport())
}, 5000)