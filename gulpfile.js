const gulp = require('gulp');
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

gulp.task('images', () => {
  return gulp
    .src(['./img/original/*.{png,jpg,svg}'])
    .pipe(imagemin())
    .pipe(gulp.dest('./img'));
});

gulp.task('styles', () => {
  return gulp
    .src(['scss/**/*.scss'])
    .pipe(
      plumber({
        errorHandler: function (error) {
          console.log(error.message);
          this.emit('end');
        },
      })
    )
    .pipe(sass())
    .pipe(autoprefixer({ browsers: ['last 2 versions'], cascade: false }))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(rename('style.css'))
    .pipe(gulp.dest('css'));
});

gulp.task('default', gulp.parallel('styles', 'images'));