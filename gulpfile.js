var fs = require('fs')
var gulp = require('gulp')
var log = require('gulp-util').log
var concat = require('gulp-concat')
var babel = require('gulp-babel')
var mocha = require('gulp-mocha')

var src = 'index.js'
var tst = 'test.js'

var babelify = function (what) {
  return gulp.src(what)
      .pipe(babel())
      .pipe(concat('.' + what))
      .pipe(
        gulp.dest('./'))
}

gulp.task ('test', function () {
  babelify(tst)
  return gulp.src('./.' + tst)
    .pipe(mocha({ reporter: 'nyan' }))
})

gulp.task ('watch', function () {
  gulp.watch(['test.js', 'index.js', 'js/**/*.js'], function (e) {
    log(e.type + ": " + e.path)
    if (e.type == 'changed') return gulp.src(e.path)
      .pipe(babel())
      .pipe(concat('.' + e.path))
      .pipe(gulp.dest('./'))
    
  })
})
