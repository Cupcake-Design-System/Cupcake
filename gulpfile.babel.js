import config from './config';
import gulp from 'gulp';
import requiredir from 'require-dir';
import c from "ansi-colors";


console.log(c.yellow(`🎂 Cupcake v${config.version} 🔧  Development`));

requiredir('./tasks');

gulp.task(
  'assets',
  gulp.series('copy', 'scripts')
);

gulp.task(
  'styles',
  gulp.series('lint:styles', 'make:styles', (done) => {
    done();
  })
);

gulp.task(
  'styles:prod',
  gulp.series('clean', 'lint:styles', 'make:styles', 'styles:min', (done) => {
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

gulp.task('build', gulp.series('clean', 'codes'));
gulp.task('dev', gulp.series('clean', 'codes', gulp.parallel('server', 'watch')));
gulp.task('default', gulp.series('dev'));
gulp.task('deploy', gulp.series('pages'));
