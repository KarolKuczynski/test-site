var gulp = require('gulp'),
    imageMin = require('gulp-imagemin'),
    del = require('del'),
    useMin = require('gulp-usemin'),
    rev = require('gulp-rev'),
    nano = require('gulp-cssnano'),
    uglify = require('gulp-uglify');

gulp.task('deleteDistFolder', function() {
    return del('./dist');
});

gulp.task('optimizeImages', ['deleteDistFolder', 'icons'], function() {
    return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
        .pipe(imageMin({
            progressive: true,
            interlaced: true,
            multipass: true
        }))
        .pipe(gulp.dest('./dist/assets/images'));
});

gulp.task('useMin', ['deleteDistFolder', 'styles', 'scripts'], function() {
    return gulp.src('./app/index.html')
        .pipe(useMin({
            css: [function() {return rev()}, function() {return nano()}],
            js: [function() {return rev()}, function() {return uglify()}]
        }))
        .pipe(gulp.dest('./dist/'))
});

gulp.task('build', ['deleteDistFolder', 'optimizeImages', 'useMin']);