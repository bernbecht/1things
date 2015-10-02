var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/**/*.scss", ['sass']);
    gulp.watch("app/**/*.html").on('change', browserSync.reload);
});

//Compiles SASS
gulp.task('sass', function() {
    gulp.src(['app/assets/styles/scss/main.import.scss',
    			 'app/assets/styles/scss/components.import.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/assets/styles/'))
        .pipe(browserSync.stream());
});

//Watch SASS modifications
gulp.task('sass:watch',function() {
    gulp.watch('app/**/*.scss',['sass']);
});
