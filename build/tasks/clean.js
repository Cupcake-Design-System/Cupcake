import gulp from 'gulp';
import config from '../../config';
import del from 'del';

// Clean dest files
gulp.task('clean', (done) => {
  return del([`${config.paths.build}/**/*`]).then(() => {
    done();
  });
});
