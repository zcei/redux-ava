const test = require('ava')
const reduxAva = require('..')

test('module exports', (t) => {
  const actionTest = reduxAva.actionTest
  t.is(typeof actionTest, 'function', 'actionTest is a function')

  const reducerTest = reduxAva.reducerTest
  t.is(typeof reducerTest, 'function', 'reducerTest is a function')
})
