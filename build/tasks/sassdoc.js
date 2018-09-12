import gulp from 'gulp';
import config from '../../config';
import sassdoc from 'sassdoc';

gulp.task('sassdoc', function () {
  var options = {
    dest: config.paths.docs + '/sassdoc',
    verbose: true,
    theme: 'flippant',
    display: {
      access: ['public', 'private'],
      alias: true,
      watermark: false,
    }
  };

  return gulp.src(`${config.styles.source}/**/*`)
    .pipe(sassdoc(options));
});


