var gulp = require('gulp');
var minify = require('gulp-minify');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');

gulp.task('build', ['build:angular', 'build:js', 'build:css']);

gulp.task('build:js', function () {
    return gulp.src('app/**/*.js')
        .pipe(concat('marvel-story.js'))
        .pipe(minify())
        .pipe(gulp.dest('app/dist/js/'));
});

gulp.task('build:angular', function () {
    var angular = "node_modules/angular/angular.min.js";
    var angularRoute = "node_modules/angular-route/angular-route.min.js";
    return gulp.src([angular,angularRoute])
        .pipe(gulp.dest('app/dist/js/'));
});

gulp.task('build:css', function () {
    return gulp.src('app/**/*.css')
        .pipe(concat('marvel-story.min.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('app/dist/css/'));
});
