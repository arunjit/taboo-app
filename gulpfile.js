var gulp = require('gulp');
var roole = require('gulp-roole');

gulp.task('default', function() {
  return gulp.src(['src/**/*.roo'])
      .pipe(roole())
      .pipe(gulp.dest('build'));
});
