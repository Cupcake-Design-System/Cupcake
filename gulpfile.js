
var gulp = require( 'gulp' ),
    autoprefixer = require( 'gulp-autoprefixer' ),
    browserSync  = require( 'browser-sync' ).create(),
    assembler = require('fabricator-assemble');
    reload  = browserSync.reload,
    sass  = require( 'gulp-sass' ),
    cleanCSS  = require( 'gulp-clean-css' ),
    sourcemaps  = require( 'gulp-sourcemaps' ),
    concat  = require( 'gulp-concat' ),
    changed = require( 'gulp-changed' ),
    uglify  = require( 'gulp-uglify' );
    


// File paths
const files = { 
  scssPath: 'src/scss/*.scss',
  cssPath: 'dist/*.css',
  scssDocsPath: 'src/docs/demo.scss',
  htmlPath: 'src/docs/**/*.html',
  jsPath: 'src/docs/assets/js/*.js'
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
    dest: 'dist',
  });
  done();
}


gulp.task('html', (done) => {
  assembler({
		materials: 'src/docs/core/**/*',
		layouts: 'src/docs/views/layouts/**/*',
		views: ['src/docs/views/**/*', '!src/docs/views/+(layouts)/**'],
    data: 'src/docs/data/**/*.{json,yml}',
    docs: 'src/docs/docs/**/*.md',
		layoutIncludes: ["src/docs/views/layouts/includes/**/*", 'layout/**/*.html'],
    dest: 'dist',
	})
  done();
});



function reloadTask(done) {
  browserSync.reload();
  done();
}

function serveTask(done) {
  browserSync.init({
    server: {
      baseDir: './dist'
    }
  });
  done();
}


// Used to concat the files in a specific order.
function scssTask() {
  return gulp.src(files.scssPath)
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe(sass({
    outputStyle: 'expanded'
  }).on('error', sass.logError))
  .pipe(autoprefixer('last 2 versions'))
  .pipe(sourcemaps.write('./maps/'))
  .pipe(gulp.dest('./dist'));
}

function scssDocsTask() {
  return gulp.src(files.scssDocsPath)
  .pipe(sass({
    outputStyle: 'expanded'
  }).on('error', sass.logError))
  .pipe(autoprefixer('last 2 versions'))
  .pipe(gulp.dest('./dist'));
}

function concatCSS() {
  return gulp.src(files.cssPath)
  .pipe(concat('style.min.css'))
  .pipe(cleanCSS())
  .pipe(gulp.dest('./dist'));
}

function jsTask() {
  return gulp.src(files.jsPath)
  .pipe(concat('script.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./dist'));
}

function watchTask(){
  gulp.watch([files.scssPath, files.scssDocsPath, files.jsPath, files.htmlPath], 
      gulp.parallel(scssTask, scssDocsTask, htmlTask, jsTask, reloadTask));    
}

exports.prod = gulp.series(
  scssTask,
  concatCSS
);

exports.default = gulp.series(
  gulp.parallel(scssTask, scssDocsTask, htmlTask, jsTask),
  serveTask,
  watchTask
);
