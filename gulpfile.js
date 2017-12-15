var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
  return gulp.src('assets/scss/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('uglify', function () {
  gulp.src('assets/js/app.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js/'))
    .pipe(browserSync.reload({
      stream: true
    }))
});


gulp.task('serve', ['sass', 'uglify'], function () {
  browserSync.init({
    server: './dist/'
  });
  gulp.watch('assets/scss/*.scss', ['sass']);
  gulp.watch('assets/js/*.js', ['uglify']);
  gulp.watch("dist/*.html", browserSync.reload);
});

gulp.task('default', ['serve']);