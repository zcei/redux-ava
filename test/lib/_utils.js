const testAction = 'action/test'

function actionCreator (name, age) {
  return {
    type: testAction,
    name: name || 'John Doe',
    age: age || 42
  }
}

const testSpy = () => ({
  deepEqual (actual, expected, description) {
    this.result = {actual, expected, description}
  },

  true: (actual, description) => {
    this.result = {actual, expected: true, description}
  }
})

module.exports = {
  testAction,
  actionCreator,
  testSpy
}
