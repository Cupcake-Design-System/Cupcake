import gulp from 'gulp';
import config from '../../config';
import octophant from 'octophant';


gulp.task('variables', (done) => {
  var options = {
    title: `Cupcake Default Condensed Settings`,
    output: './dist/_settings.scss',
    sort: [
      'Global Config'
    ]
  };
  octophant('src/**/*.scss', options, done);
});

