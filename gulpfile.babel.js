import config from './config';
import gulp from 'gulp';
import requiredir from 'require-dir';
import c from "ansi-colors";


console.log(c.yellow(`🎂 Cupcake v${config.version} 🔧  Development`));

requiredir('./build/tasks');

gulp.task(
  'assets',
  gulp.series('copy')
);

gulp.task(
  'styles',
  gulp.series('lint:styles', 'make:styles', 'make:styles:docs', (done) => {
    done();
  })
);

gulp.task(
  'styles:prod',
  gulp.series('clean', 'lint:styles', 'make:styles', 'make:styles:min', (done) => {
    done();
  })
);

gulp.task(
  'lint',
  gulp.series('lint:styles')
);

gulp.task(
  'codes',
  gulp.series('styles', 'html', 'sassdoc')
);

gulp.task(
  'tokens',
  gulp.series('tokens:colors-map', 'tokens:map', 'tokens:core', (done) => {
    done();
  })
);

gulp.task('build', gulp.series('clean', 'codes', 'make:styles:min'));
gulp.task('dev', gulp.series('clean', 'codes', gulp.parallel('server', 'watch')));
gulp.task('default', gulp.series('dev'));
