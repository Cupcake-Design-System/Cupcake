var gulp         = require( 'gulp' ),
    del          = require("del"),
    sass         = require('gulp-sass'),
    rename       = require('gulp-rename'),
    concat       = require('gulp-concat'),
    uglify       = require('gulp-uglify'),
    addHeader    = require('gulp-header'),
    changed      = require('gulp-changed'),
    pkg          = require('./package.json'),
    cleanCSS     = require('gulp-clean-css'),
    sourcemaps   = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    assembler    = require('fabricator-assemble'),
    browserSync  = require('browser-sync').create(),
    gcmq         = require('gulp-group-css-media-queries');


var metaHeader = `
/* ----------------------- */
/* 🎂 CUPCAKE 🎂 */
/* pkg name: ${pkg.name} */
/* version: ${pkg.version} */
/* file name: <%= filename %> */
/* ----------------------- */

`;

// File paths
// ------------------
const files = {
  scssPath: 'src/scss/',
  cssPath: 'dist/*.css',
  distPath: 'dist/',
  scssDocsPath: 'src/docs/demo.scss',
  htmlPath: 'src/docs/**/*.html',
  jsPath: 'src/docs/assets/js/*.js'
}

// Clean
function cleanTask() {
  return del([files.distPath]);
}


// HTML
// ------------------
function htmlTask(done) {
  assembler({
		materials: 'src/docs/core/**/*',
		layouts: 'src/docs/views/layouts/**/*',
		views: ['src/docs/views/**/*', '!src/docs/views/+(layouts)/**'],
    data: 'src/docs/data/**/*.{json,yml}',
    docs: 'src/docs/docs/**/*.md',
		layoutIncludes: ["src/docs/views/layouts/includes/**/*", 'layout/**/*.html'],
    dest: files.distPath,
  });
  done();
}


// Browser Tasks
// ------------------
function reloadTask(done) {
  browserSync.reload();
  done();
}

function serveTask(done) {
  browserSync.init({
    server: {
      baseDir: files.distPath
    }
  });
  done();
}


// Scss Tasks
// ------------------
function scssTask() {
  return gulp.src(files.scssPath + '*.scss')
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe(sass({
    outputStyle: 'expanded'
  }).on('error', sass.logError))
  .pipe(autoprefixer('last 2 versions'))
  .pipe(addHeader(metaHeader))
  .pipe(sourcemaps.write('./maps/'))
  .pipe(gulp.dest(files.distPath));
}


// Scss Docs Tasks
// ------------------
function scssDocsTask() {
  return gulp.src(files.scssDocsPath)
  .pipe(sass({
    outputStyle: 'expanded'
  }).on('error', sass.logError))
  .pipe(autoprefixer('last 2 versions'))
  .pipe(gulp.dest(files.distPath));
}


// Prod css Tasks
// ------------------
function prodCSS() {
  return gulp.src(files.cssPath)
  .pipe(gcmq())
  .pipe(cleanCSS({rebase: false}))
  .pipe(rename({ suffix: '.min' }))
  .pipe(gulp.dest(files.distPath));
}


// js Tasks
// ------------------
function jsTask() {
  return gulp.src(files.jsPath)
  .pipe(concat('script.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest(files.distPath));
}


// Watch Tasks
// ------------------
function watchTask() {
  gulp.watch(files.scssPath + '**/*.scss', gulp.series(scssTask, reloadTask));
  gulp.watch(files.scssDocsPath, gulp.series(scssDocsTask, reloadTask));
  gulp.watch(files.jsPath, gulp.series(jsTask, reloadTask));
  gulp.watch(files.htmlPath, gulp.series(htmlTask, reloadTask));
}


exports.prod = gulp.series(
  cleanTask,
  scssDocsTask,
  htmlTask,
  scssTask,
  prodCSS
);

exports.default = gulp.series(cleanTask,
  gulp.parallel(scssTask, scssDocsTask, htmlTask, jsTask),
  serveTask,
  watchTask
);
