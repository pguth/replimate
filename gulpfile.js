var gulp = require('gulp')
var log = require('gulp-util').log
var lib = require('./gulpfile.lib.js')

var src = 'index.js'
var tst = 'test.js'
var buildID = 1

var newBuildLog = function () {
  log("Build # " + lib.couldBeGutilLog (buildID++, 1)
  + " ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
}


gulp.task ('watch', function () {
  lib.generateBundle('index.js', 'bundle.js')
  lib.generateBundle('test.js', 'bundle.tst.js')
  lib.runTests()
    
  gulp.watch(['index.js', 'src/**/*.js'], function (f) {
    if (f.type == 'changed') {
      newBuildLog()
      log("Changed: " + f.path)
      var ret = lib.generateBundle('index.js', 'bundle.js')
      lib.runTests()
      return ret
    }
  })
  gulp.watch(['test.js', 'tst/**/*.js'], function (f) {
    if (f.type == 'changed') {
      newBuildLog()
      log("Changed: " + f.path)
      var ret = lib.generateBundle('test.js', 'bundle.tst.js')
      lib.runTests()
      return ret  
    }
  })
  
})
