import gulp from 'gulp';
import config from '../config';
import assembler from 'fabricator-assemble';
import browser from './browser';

// HTML
// ------------------

gulp.task('make:html', (done) => {
  assembler({
		materials: config.html.core,
		layouts: config.html.layouts,
		views: config.html.views,
		data: config.html.data,
		layoutIncludes: config.html.layoutIncludes,
    dest: config.html.build,
	});
  done();
});


gulp.task(
  'html',
  gulp.series('make:html', (done) => {
    done();
  })
);

