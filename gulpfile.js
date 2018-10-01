const gulp = require('gulp');
const assembler = require('fabricator-assemble');
const browserSync = require('browser-sync');
const reload = browserSync.reload;


// HTML
// ------------------

gulp.task('html', (done) => {
  assembler({
		materials: 'src/docs/core/**/*',
		layouts: 'src/docs/views/layouts/**/*',
		views: ['src/docs/views/**/*', '!src/docs/views/+(layouts)/**'],
    data: 'src/docs/data/**/*.{json,yml}',
    docs: 'src/docs/docs/**/*.md',
		layoutIncludes: ["src/docs/views/layouts/includes/**/*", 'layout/**/*.html'],
    dest: 'dist',
	});
  done();
});


gulp.task('server', () => {
  browserSync(
    {
      server: {
        baseDir: './dist',
      },
      port: 4000,
      notify: true,
      open: true,
      logPrefix:`Serving your Cupcake 🎂`,
    }
  );
});


gulp.task('default', ['html']);