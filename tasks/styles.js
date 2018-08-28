import gulp from 'gulp';
import config from '../config';
import sass from 'gulp-sass';
import plumber from 'gulp-plumber';
import autoprefixer from 'autoprefixer';
import stylelint from 'stylelint';
import postcss from 'gulp-postcss';
import syntaxScss from 'postcss-scss';
import reporter from 'postcss-reporter';
import browser from './browser';
import notify from 'gulp-notify';
import addHeader from 'gulp-header';
import addFooter from 'gulp-footer';
import sourcemaps from 'gulp-sourcemaps';
import cleanCSS from 'gulp-clean-css';
import gcmq from 'gulp-group-css-media-queries';
import rename from 'gulp-rename';


// STYLES
// ------------------
// lints styles using stylelint (config under 'stylelint' in package.json)
gulp.task('lint:styles', () => {
  return gulp
    .src(`${config.styles.source}/**/*.scss`, {
      base: './',
      since: gulp.lastRun('lint:styles'),
    })
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(postcss([
          stylelint({
            fix: true,
            syntax: 'scss',
          }),
          reporter({
            clearMessages: true,
            clearReportedMessages: true
          }),
        ],
        {syntax: syntaxScss}
      )
    )
    .pipe(gulp.dest('./'));
});


gulp.task('make:styles', () => {
  return gulp
    .src(`${config.styles.source}/*.scss`)
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(cleanCSS({format: 'beautify'}))
    .pipe(addHeader(config.header + '/* flavor: Default */\n\n'))
    .pipe(addFooter(config.footer))
    .pipe(sourcemaps.write('maps'))
    .pipe(plumber.stop())
    .pipe(gulp.dest(`${config.styles.build}`))
    .pipe(browser.stream());
});

gulp.task('styles:min', function() {
  return gulp
    .src(`${config.styles.build}/**/*.css`)
    .pipe(gcmq())
    .pipe(cleanCSS({rebase: false}))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(`${config.styles.build}`))
});



