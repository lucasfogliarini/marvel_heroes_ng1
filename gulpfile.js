var gulp = require('gulp');
var minify = require('gulp-minify');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');

gulp.task('build', ['dist:angular', 'dist:js', 'dist:css']);

gulp.task('dist:js', function () {
    return gulp.src('app/**/*.js')
        .pipe(concat('marvel-heroes.js'))
        .pipe(minify())
        .pipe(gulp.dest('app/dist/js/'));
});

gulp.task('dist:angular', function () {
    var angular = "node_modules/angular/angular.min.js";
    var angularRoute = "node_modules/angular-route/angular-route.min.js";
    return gulp.src([angular,angularRoute])
        .pipe(gulp.dest('app/dist/js/'));
});

gulp.task('dist:css', function () {
    return gulp.src('app/**/*.css')
        .pipe(concat('marvel-heroes.min.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('app/dist/css/'));
});
