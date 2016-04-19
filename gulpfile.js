"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); //runs local dev server
var open = require('gulp-open'); // Open a UEL in a web browser

var config = {
    port: 9005,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './src/*.html',
        dist: './dist'
    }
};

//Start a local development server
gulp.task('connect', function () {
    connect.server({
        root: ['dist'],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    })
});

//open after connect
gulp.task('open', ['connect'], function () {
    gulp.src('dist/index.html')
        .pipe(open({uri: config.devBaseUrl + ':' + config.port + '/'}))
});

//put all html file to dist and reload
gulp.task('html', function () {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(config.paths.html, ['html']);
});

//default gulp task, that runs html and open tasks by simply "gulp" in console
gulp.task('default', ['html', 'open', 'watch']);
