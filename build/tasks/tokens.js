import gulp from 'gulp';
import config from '../../config';
import gulpTheo from 'gulp-theo';
import theo from 'theo';
import rename from 'gulp-rename';
import del from 'del';
import vinylPaths from 'vinyl-paths';
import concat from 'gulp-concat';


//Custom formatter for nested map
theo.registerFormat("deep", result => {
  let { category, type } = result
    .get("props")
    .first()
    .toJS();
  return `
  $${category}-${type}: (
  ${result
    .get("props")
    .map(
      prop => `
      '${prop.get("name")}': (
        0: $${prop.get("name")}-0,
        1: $${prop.get("name")}-1,
        2: $${prop.get("name")}-2,
        3: $${prop.get("name")}-3,
        4: $${prop.get("name")}-4,
        5: $${prop.get("name")}-5,
        6: $${prop.get("name")}-6,
        7: $${prop.get("name")}-7,
        8: $${prop.get("name")}-8,
        9: $${prop.get("name")}-9
      ),`
    )
    .sort()
    .join("\n")}
  );
  `;
});


theo.registerFormat('map.variables.scss', `
$\{{stem meta.file}}: (
  {{#each props as |prop|}}
    {{kebabcase prop.name}}: $\{{kebabcase prop.type}}-{{kebabcase prop.name}},
  {{/each}}
  );`);

  theo.registerFormat('default', `
  {{#each props as |prop|}}
  $\{{kebabcase prop.type}}-{{kebabcase prop.name}}: {{#eq prop.type "string"}}"{{/eq}}{{{prop.value}}}{{#eq prop.type "string"}}"{{/eq}} !default;
{{/each}}`);
  


// Formats with px values
const unitsFormats = [
  'map.variables.scss'
];

gulp.task('tokens:base', (done) => {
    gulp.src(config.tokens.input + '/index.yml')
          .pipe(gulpTheo({
              transform: { includeMeta: true },
              format: { type: 'default' }
          }))
          .pipe(rename(function(path) {
              path.basename = 'tokens';
              path.extname = ".scss"
          }))
          .pipe(gulp.dest('src/scss/'))
  done();
});


gulp.task('tokens:map', (done) => {
      gulp.src([
        config.tokens.input + '/*.yml',
        '!./src/tokens/index.yml',
        '!./src/tokens/_aliases.yml',
        '!./src/tokens/colors-map.yml'
      ])
          .pipe(gulpTheo({
              transform: { includeMeta: true },
              format: { type: 'map.variables.scss' }
          }))
          .pipe(vinylPaths(del))
          .pipe(rename(function (opt) {
            opt.basename = opt.basename.replace(/.map.variables/, '');
            return opt;
          }))
          .pipe(concat('maps.scss'))
          .pipe(gulp.dest('src/scss/tokens'))
  done();
});


gulp.task('tokens:core', (done) => {
  gulp.src([
    config.tokens.input + '/*.yml',
    '!./src/tokens/index.yml',
    '!./src/tokens/_aliases.yml',
    '!./src/tokens/colors-map.yml'
  ])
      .pipe(gulpTheo({
          transform: { includeMeta: true },
          format: { type: 'default' }
      }))
      .pipe(vinylPaths(del))
      .pipe(rename(function (opt) {
        opt.extname = ".scss";
        opt.basename = opt.basename.replace(/.default/, '');
        return opt;
      }))
      .pipe(concat('all.scss'))
      .pipe(gulp.dest('src/scss/tokens'))
done();
});


gulp.task('tokens:colors-map', (done) => {
      gulp.src(config.tokens.input + '/colors-map.yml')
          .pipe(gulpTheo({
              transform: { includeMeta: true },
              format: { type: 'deep' }
          }))
          .pipe(rename(function(path) {
              path.basename = 'colors-map';
              path.extname = ".scss";
          }))
          .pipe(gulp.dest('src/scss/tokens'))
  done();
});


gulp.task('token:concat', (done) => {
  return gulp.src(['./src/scss/tokens/*.scss',
  '!./src/scss/tokens/index.scss',
  '!./src/scss/tokens/_aliases.scss',
  '!./src/scss/tokens/colors.scss'])
    .pipe(concat('all.scss'))
    .pipe(gulp.dest('src/scss/tokens'))
  done();
});


gulp.task('clean:tokens', (done) => {
  return del('src/scss/tokens/**').then(() => {
    done();
  });
});
