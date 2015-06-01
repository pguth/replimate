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
var gutilLog = function (what) {
    log("Starting '"
      + '\u001b[36m' + what + '\u001b[0m' + "'...")
}
gulp.task ('watch', function () {
  gulp.watch(['index.js', 'src/**/*.js'], function (f) {
    if (f.type == 'changed') {
      log("Changed: " + f.path)
      gutilLog("babelify")
      return gulp.src(f.path)
        .pipe(babel())
        .pipe(mocha({ reporter: 'nyan' }))
        .pipe(concat('.' + f.path))
        .pipe(gulp.dest('./'))
    }
  })
  gulp.watch(['test.js', 'tst/**/*.js'], function (f) {
    if (f.type == 'changed') {
      log("Changed: " + f.path)
      gutilLog("babelify")
      return gulp.src(f.path)
        .pipe(babel())
        .pipe(concat('.' + f.path))
        .pipe(gulp.dest('./'))
    }
  })
  
})
