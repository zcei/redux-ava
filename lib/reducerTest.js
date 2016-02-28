'use strict'

const deepFreeze = require('deep-freeze')

module.exports = (reducer, stateBefore, action, stateAfter, description) => t => {
  deepFreeze(action)
  deepFreeze(stateBefore)

  t.same(reducer(stateBefore, action()), stateAfter, description)
}
