import assert = require('assert')
import Util from '../src/util'


suite('util', () => {})


test('flatten', () => {
  assert.deepEqual([5, 6], Util.flatten([5, [6]]))
})