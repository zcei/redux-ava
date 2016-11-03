const test = require('ava')
const m = require('../')

test('module returns the correct types', (t) => {
  const actionTest = m.actionTest
  t.is(typeof actionTest, 'function', 'actionTest is a function')

  const reducerTest = m.reducerTest
  t.is(typeof reducerTest, 'function', 'reducerTest is a function')
})
