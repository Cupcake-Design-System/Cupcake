import gulp from 'gulp';
import config from '../config';
import browser from './browser';
import notify from 'gulp-notify';

// Copy assets to dist on build task
gulp.task('scripts', () => {
  return gulp
    .src(`${config.scripts.source}/**/*`)
    .pipe(gulp.dest(`${config.scripts.build}`))
    .pipe(browser.stream())
});
