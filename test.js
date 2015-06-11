let log = require('gulp-util')
let assert = require('better-assert')

let main = require('./bundle.js')



describe(`First test:`, () =>{
  it( `It's noop() method returns its input str`,
    () =>{
      assert(
        main.noop('[app started]')
        === '[app started]')
    })
})

describe(`WebRTC:`, () =>{
  before(() =>{
    // runs before all tests in this block
  })
  it(`Detects if there is WebRTC support.`, () =>{
    assert(x=>{
       
    })
  })
  it( `Registers w/ the broker`,
  () =>{
    assert(false)
  })
  it( `Generates a broker unique wordcombination`,
  () =>{
    assert(false)
  })
  /*
  it( ``,
  () = {
  })
  */
})
describe(`Gossiping:`, () =>{
  before(() =>{})
  
})

describe(`Database:`, () =>{
  before(() =>{})
  
})

describe(`UI:`, () =>{
  before(() =>{})
  
})
