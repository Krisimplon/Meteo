var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var pump = require('pump');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var scsslint = require('gulp-scss-lint');

gulp.task('sass', function() {
  return gulp.src('assets/scss/style.scss')
    .pipe($.sass({
      includePaths: 'assets/scss/components',

    })
    .on('error', $.sass.logError))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
});

gulp.task('uglify', function () {
        gulp.src('assets/js/app.js')
          uglify()
        gulp.dest('dist/js/')
        .pipe(browserSync.stream());
});


gulp.task('serve', ['sass', 'uglify'], function() {
    browserSync.init({
        server: './dist/',
        open: true,
        notify: false,
        reload:true
    });
		gulp.watch('assets/scss/**/*.scss',['sass']);
		gulp.watch('assets/js/**/*.js', ['uglify']);
		 gulp.watch("dist/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);