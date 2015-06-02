let log = require('gulp-util')
let assert = require('better-assert')

describe('App start', () => {
  before(() => {
    // runs before all tests in this block
  })
  
  it(`it's noop() method returns its input str`, () => {
    let main = require('./bundle.js')
    assert(
      main.noop('[app started]')
      === "[app started]" + 'e')
  })
})



