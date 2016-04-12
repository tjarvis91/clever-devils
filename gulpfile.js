/* eslint-env node */

var gulp = require('gulp');
var eslint = require('gulp-eslint');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('default', ['styles', 'lint'], function() {
  // Update css files from scss files
  gulp.watch('sass/**/*.scss', ['styles']);
  gulp.watch(['js/**/*.js'], ['lint']);

  browserSync.init({
    server: './'
  });
  browserSync.stream();
});

gulp.task('lint', function() {
  return gulp.src(['js/**/*.js'])
    // eslint() attaches the lint output to the eslint property of the file
    // object so it can be used by other modules.
    .pipe(eslint())
    // eslint.format() outputs the lint results to the console.
    .pipe(eslint.format())
    // To have the process exit with an error code (1) on lint error, return
    // the stream and pipe to failOnError last.
    .pipe(eslint.failOnError());
});

gulp.task('styles', function() {
  gulp.src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest('./css'));
});
