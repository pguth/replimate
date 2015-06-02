var fs = require('fs')
var gulp = require('gulp')
var log = require('gulp-util').log
var concat = require('gulp-concat')
var babel = require('gulp-babel')
var mocha = require('gulp-mocha')

var src = 'index.js'
var tst = 'test.js'

var concatToDot = function (what, plugin) {
  return gulp.src(what)
      .pipe(using())
      .pipe(concat('.' + what))
      .pipe(
        gulp.dest('./'))
}

var babelify = function (what) {
  return gulp.src(what)
      .pipe(babel())
      .pipe(concat('.' + what))
      .pipe(
        gulp.dest('./'))
}
var couldBeGutilLog = function (what, colorCode) {
    return ('\u001b[' + colorCode + 'm' + what + '\u001b[0m')
}
var generateBundle = function (which, where) {
  log("Working on " + which)
  log("Starting '" + couldBeGutilLog("babelify + concat", 36) + "'...")
  return gulp.src(which, { entry: true })
    .pipe(babel())
    .pipe(concat(where))
    .pipe(gulp.dest('./'))
}
var runTests = function () {
  log("Starting '" + couldBeGutilLog("mocha", 36) + "'...")
  return gulp.src('bundle.tst.js')
    .pipe(mocha({ reporter: 'nyan' }))
    .on('error', function (err) {
      log("Some tests by '" + couldBeGutilLog ('test.js', 36)
      + "' failed...")
    })
}

gulp.task ('watch', function () {
  generateBundle('index.js', 'bundle.js')
  generateBundle('test.js', 'bundle.tst.js')
  runTests()
    
  gulp.watch(['index.js', 'src/**/*.js'], function (f) {
    if (f.type == 'changed') {
      log("Changed: " + f.path)
      var ret = generateBundle('index.js', 'bundle.js')
      runTests()
      return ret
    }
  })
  gulp.watch(['test.js', 'tst/**/*.js'], function (f) {
    if (f.type == 'changed') {
      log("Changed: " + f.path)
      var ret = generateBundle('test.js', 'bundle.tst.js')
      runTests()
      return ret  
    }
  })
  
})
