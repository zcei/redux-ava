'use strict'

module.exports = (actionCreator, action, description) => t => {
  t.same(actionCreator(), action, description)
}
