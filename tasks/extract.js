import gulp from 'gulp';
import config from '../config';
import extract from 'gulp-style-extract';
import rename from 'gulp-rename';


gulp.task('extract:color', (done) => {
  gulp.src(`${config.styles.build}/cupcake.css`)
   .pipe(extract({
      properties: ['color']
  }))
  .pipe(rename('colors.css'))
  .pipe(gulp.dest(`${config.styles.tokens}`))
  done();
});

gulp.task('extract:bg', (done) => {
  gulp.src(`${config.styles.build}/*.css`)
   .pipe(extract({
      properties: ['background-color']
  }))
  .pipe(rename('bg-colors.css'))
  .pipe(gulp.dest(`${config.styles.tokens}`))
  done();
});


gulp.task(
  'extract',
  gulp.series('extract:bg', 'extract:color', (done) => {
    done();
  })
);
