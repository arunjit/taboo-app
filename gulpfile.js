var path = require('path');

var gulp = require('gulp');
var roole = require('gulp-roole');
var symlink = require('gulp-symlink');

var SRC = 'src';
var DEV = 'build/dev';
var DIST = 'build/dist'

gulp.task('symlink', function() {
  return gulp.src(['src/**/*.*', '!src/**/*.roo']).
    pipe(symlink.absolute(function(file) {
      return path.join(path.dirname(file.base), DEV, file.relative);
    }));
});

gulp.task('roole', function() {
  return gulp.src(['src/**/*.roo'])
      .pipe(roole())
      .pipe(gulp.dest(DEV));
});

gulp.task('watch', function() {
  return gulp.watch('src/**/*.roo', ['roole']);
});

gulp.task('dev', ['symlink', 'roole']);
