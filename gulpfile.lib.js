var fs = require('fs')
var gulp = require('gulp')
var log = require('gulp-util').log
var concat = require('gulp-concat')
var babel = require('gulp-babel')
var mocha = require('gulp-mocha')
var lib = require('./gulpfile.lib.js')




var ex = {}


var src = 'index.js'
var tst = 'test.js'


ex.concatToDot = function (what, plugin) {
  return gulp.src(what)
      .pipe(using())
      .pipe(concat('.' + what))
      .pipe(
        gulp.dest('./'))
}

ex.babelify = function (what) {
  return gulp.src(what)
      .pipe(babel())
      .pipe(concat('.' + what))
      .pipe(
        gulp.dest('./'))
}

ex.couldBeGutilLog = function (what, colorCode) {
    return ('\u001b[' + colorCode + 'm' + what + '\u001b[0m')
}

ex.generateBundle = function (which, where) {
  log("Starting '" + ex.couldBeGutilLog("babelify + concat", 36) + "'...")
  gulp.src(which, { entry: true })
    .pipe(babel())
    .pipe(concat(where))
    .pipe(gulp.dest('./'))
}

ex.runTests = function () {
  log("Starting '" + ex.couldBeGutilLog("mocha", 36) + "'...")
  setTimeout(function () { gulp.src('bundle.tst.js')
    .pipe(mocha({ reporter: 'nyan' }))
    .on('error', function (err) {
      return null
    })}, 100) // todo: get rid of timeout using `async`
}

module.exports = ex
