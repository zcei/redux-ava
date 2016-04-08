'use strict'

module.exports = (actionCreator, action, description) => t => {
  t.deepEqual(actionCreator(), action, description)
}
