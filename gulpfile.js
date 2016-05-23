"use strict";

let gulp = require('gulp');
let connect = require('gulp-connect'); //runs local dev server
let open = require('gulp-open'); // Open a UEL in a web browser
let del = require('del');
let webpack = require('webpack-stream');
let concat = require('gulp-concat'); // concatenates files
let lint = require('gulp-eslint'); // Lint JS files, including jsx
let babel = require('gulp-babel');

var config = {
    port: 9005,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './src/*.html',
        js: './src/**/*.js',
        jsx: './src/**/*.jsx',
        images: './src/images/*',
        css: [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
            'node_modules/toastr/toastr.css'
        ],
        dist: './dist',
        temp: './dist/temp',
        mainJsx: './src/main.jsx',
        mainJs: './dist/temp/main.js'
    }
};

//Start a local development server
gulp.task('connect', function () {
    connect.server({
        root: ['dist'],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    });
});

//open after connect
gulp.task('open', ['connect'], function () {
    gulp.src('dist/index.html')
        .pipe(open({uri: config.devBaseUrl + ':' + config.port + '/'}));
});

//put all html file to dist and reload
gulp.task('html', function () {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task('translate', () => {
    return gulp.src([config.paths.js, config.paths.jsx])
        .pipe(babel({
            plugins: [
                "transform-react-jsx",
                "transform-es2015-modules-commonjs"
            ]
        }))
        .pipe(gulp.dest(config.paths.temp));
});

gulp.task('js', ['translate'], function () {
    gulp.src(config.paths.mainJs)
        .pipe(webpack({
            devtool: 'source-map',
            output: {
                filename: 'bundle.js'
            }
        }))
        .on('error', console.error.bind(console))
        .pipe(gulp.dest(config.paths.dist + '/scripts')) // bundle path
        .pipe(connect.reload());
});

gulp.task('css', function () {
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'));
});

//Migrates images to dist folder
gulp.task('images', function () {
    gulp.src(config.paths.images)
        .pipe(gulp.dest(config.paths.dist + '/images'))
        .pipe(connect.reload());

    //publish flavicon
    gulp.src('./src/favicon.ico')
        .pipe(gulp.dest(config.paths.dist));
});

gulp.task('lintJs', function () {
    return gulp.src(config.paths.js)
        .pipe(lint({config: 'eslint.config.json'}))
        .pipe(lint.format());
});

gulp.task('lintJsx', function () {
    return gulp.src(config.paths.jsx)
        .pipe(lint({config: 'eslint.config.json'}))
        .pipe(lint.format());
});

gulp.task('watch', function () {
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js, ['js', 'lintJs']);
    gulp.watch(config.paths.jsx, ['js', 'lintJsx']);
});

gulp.task('clean', function () {
    return del([config.paths.dist]);
});

//default gulp task, that runs html and open tasks by simply "gulp" in console
//need empty function, because gulp task run it asynchronously when task are 'void'
gulp.task('default', ['html', 'js', 'css', 'images', 'lintJs', 'lintJsx', 'open', 'watch']);
