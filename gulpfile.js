var path = require('path');

var gulp = require('gulp');
var rimraf = require('gulp-rimraf');
var roole = require('gulp-roole');
var symlink = require('gulp-sym');

var SRC = 'src';
var DEV = 'build/dev';
var DIST = 'build/dist'

gulp.task('clean', function() {
  return gulp.src('build', {read: false})
      .pipe(rimraf({force: true}));
});

gulp.task('symlink', function() {
  return gulp.src(['src/**/*.*', '!src/**/*.roo']).
    pipe(symlink(function(file) {
      return path.join(path.dirname(file.base), DEV, file.relative);
    }));
});

gulp.task('symlink-packages', function() {
  return gulp.src('bower_components')
      .pipe(symlink(path.join(DEV, 'packages')));
});

gulp.task('roole', function() {
  return gulp.src(['src/**/*.roo'])
      .pipe(roole())
      .pipe(gulp.dest(DEV));
});

gulp.task('watch', function() {
  return gulp.watch('src/**/*.roo', ['roole']);
});

gulp.task('dev', ['symlink', 'symlink-packages', 'roole']);
