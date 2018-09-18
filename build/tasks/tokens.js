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
  


// This runs the task over index.yml -making variables and adding !default
// gulp.task('tokens:base', (done) => {
//     gulp.src(config.tokens.input + '/index.yml')
//           .pipe(gulpTheo({
//               transform: { includeMeta: true },
//               format: { type: 'default' }
//           }))
//           .pipe(rename(function(path) {
//               path.basename = 'tokens';
//               path.extname = ".scss"
//           }))
//           .pipe(gulp.dest('src/scss/'))
//   done();
// });


// This runs the task over the files making a map based on default variables
gulp.task('tokens:map', (done) => {
      gulp.src([
        config.tokens.input + '/*.yml',
        '!./src/tokens/index.yml',
        '!./src/tokens/_aliases.yml',
        '!./src/tokens/colors-map.yml',
        '!./src/tokens/colors.yml'
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

// This runs the task over the files making a single file with default variables
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
      .pipe(concat('index.scss'))
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
          .pipe(concat('maps.scss'))
          .pipe(gulp.dest('src/scss/tokens'))
  done();
});


gulp.task('clean:tokens', (done) => {
  return del('src/scss/tokens/**').then(() => {
    done();
  });
});

gulp.task('tokens:map:concat', function() {
  return gulp.src(['src/tokens/colors-map.scss','src/tokens/maps.scss'])
    .pipe(concat('maps.scss'))
    .pipe(gulp.dest('src/scss/tokens'))
});
