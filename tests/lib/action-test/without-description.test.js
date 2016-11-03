const test = require('ava')
const reduxAva = require('../../..')
const actionTest = reduxAva.actionTest

const utils = require('../_utils')
const testSpy = utils.testSpy
const TEST_ACTION = utils.TEST_ACTION
const actionCreator = utils.actionCreator

test('single parameter', (t) => {
  const expected = { type: TEST_ACTION, name: 'John Doe', age: 42 }
  const tester = actionTest(actionCreator, 'Jane Doe', expected)

  const spy = testSpy()
  tester(spy)
  const result = spy.result

  t.deepEqual(result.actual, actionCreator('Jane Doe'), 'is action with given name and default age')
  t.is(result.expected, expected)
  t.is(typeof result.description, 'undefined')
})
