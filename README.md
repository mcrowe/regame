# Regame

A React-inspired 2d game engine for Typescript.

## TODO

- More test coverage
- Efficient rendering by automatically skipping models outside the frame
- Use JSX for rendering?
- Allow nested models?

## Usage

> npm install @mcrowe/regame --save

```js
import * as Regame from '@mcrowe/regame'

const canvas = document.getElementById('game')

interface IState {
  x: number;
}

function camera(state: IState): Regame.Camera {
  return { center: { x: 0, y: 0 }, width: 100 }
}

function render(state: IState): Regame.Scene {
  return [Regame.Circle({ center: { x: state.x, y: 300 }, radius: 20 })]
}

function update(state: IState, dt: number): void {
  state.x += 0.1 * dt
}

const initialState: IState = { x: 0 }

Regame.makeGame < IState > (canvas, update, render, camera, initialState)
```

## Development

Install npm modules:

> npm install

Run tests:

> npm test

Build:

> npm run build

Publish to npm:

1. Update the version in `package.json`

2. Build using `npm run build`

3. Publish using `npm publish --access=public`
