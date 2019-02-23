const   gulp = require('gulp'),
        autoprefixer = require('gulp-autoprefixer'),
        sass = require('gulp-sass'),
        rename = require('gulp-rename');

gulp.task('sass', () => {
    gulp.src('scss/app.scss')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sass({
            includePaths: ['scss'].concat('node_modules/@fortawesome/fontawesome-free/scss/')
        }))
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(rename('style.css'))
        .pipe(gulp.dest('css'));
});
        
/* gulp.task('fonts', () => {
    return gulp.src('node_modules/@fortawesome/fontawesome-free/webfonts/*')
      .pipe(gulp.dest('../blog/fonts'))
  }) */

gulp.task('watch', ['sass'], () => {
    gulp.watch(['scss/*.scss'], ['sass']);
});