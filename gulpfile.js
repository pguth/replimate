var fs = require('fs')
var gulp = require('gulp')
var log = require('gulp-util').log
var concat = require('gulp-concat')
var babel = require('gulp-babel')
var mocha = require('gulp-mocha')
var lib = require('./gulpfile.lib.js')

var src = 'index.js'
var tst = 'test.js'


gulp.task ('default', function () {
  lib.generateBundle('index.js', 'bundle.js')
  lib.generateBundle('test.js', 'bundle.tst.js')
  lib.runTests()
    
  gulp.watch(['index.js', 'src/**/*.js'], function (f) {
    if (f.type == 'changed') {
      log("Changed: " + f.path)
      var ret = lib.generateBundle('index.js', 'bundle.js')
      lib.runTests()
      return ret
    }
  })
  gulp.watch(['test.js', 'tst/**/*.js'], function (f) {
    if (f.type == 'changed') {
      log("Changed: " + f.path)
      var ret = lib.generateBundle('test.js', 'bundle.tst.js')
      lib.runTests()
      return ret  
    }
  })
  
})
