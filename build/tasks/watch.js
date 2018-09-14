import gulp from 'gulp';
import config from '../../config';
import browser from './browser';

// WATCH TASKS
// ------------------
// watches for changes, recompiles & injects html + assets
gulp.task('watch:styles', () => {
  gulp.watch(`${config.styles.source}/**/*.scss`, gulp.series('styles'));
});

gulp.task('watch:sassdoc', () => {
  gulp.watch(`${config.styles.source}/**/*`, gulp.series('sassdoc'));
});

gulp.task('watch:docs', () => {
  gulp.watch(`${config.styles.docs}/**/*`, gulp.series('styles'));
});


gulp.task('watch:html', () => {
  gulp.watch(
    [`${config.html.all}`, 'config.js'],
    gulp.series('html', function(done) {
      browser.reload();
      done();
    })
  );
});


gulp.task(
  'watch',
  gulp.parallel(
    'watch:styles',
    'watch:docs',
    'watch:sassdoc',
    'watch:html'
  )
);
