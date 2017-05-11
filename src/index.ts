import Models from './models'
import Game from './game'
import Canvas from './canvas'
import Coord from './coord'
import { Camera, Model, Frame, Point, RenderContext } from './types'


export default {
  Canvas,
  Coord,
  Game,
  Circle: Models.Circle,
  Text: Models.Text,
  Rect: Models.Rect,
  Polygon: Models.Polygon
}