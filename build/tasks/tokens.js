import gulp from 'gulp';
import config from '../../config';
import gulpTheo from 'gulp-theo';
import theo from 'theo';
import rename from 'gulp-rename';
import del from 'del';
import vinylPaths from 'vinyl-paths';
import concat from 'gulp-concat';
import addHeader from 'gulp-header';
import pkg from '../../package.json';

//Custom formatter for nested map
theo.registerFormat("deep", result => {
  let { category, type } = result
    .get("props")
    .first()
    .toJS();
  return `
  $${type}: (
  ${result
    .get("props")
    .map(
      prop => `
      '${prop.get("name")}': (
        0: $${prop.get("type")}-${prop.get("name")}-0,
        1: $${prop.get("type")}-${prop.get("name")}-1,
        2: $${prop.get("type")}-${prop.get("name")}-2,
        3: $${prop.get("type")}-${prop.get("name")}-3,
        4: $${prop.get("type")}-${prop.get("name")}-4,
        5: $${prop.get("type")}-${prop.get("name")}-5,
        6: $${prop.get("type")}-${prop.get("name")}-6,
        7: $${prop.get("type")}-${prop.get("name")}-7,
        8: $${prop.get("type")}-${prop.get("name")}-8,
        9: $${prop.get("type")}-${prop.get("name")}-9
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

theo.registerFormat('cssCustomProps', `:root {
  {{#each props as |prop|}}
    {{#if prop.comment}}
    {{{trimLeft (indent (comment (trim prop.comment)))}}}
    {{/if}}
    --{{kebabcase prop.type}}-{{kebabcase prop.name}}: {{#eq prop.type "string"}}"{{/eq}}{{{prop.value}}}{{#eq prop.type "string"}}"{{/eq}};
  {{/each}}
  }`);

theo.registerFormat('JSON', `{
  {{#each props as |prop|}}
    {{#if prop.comment}}
    {{{trimLeft (indent (comment (trim prop.comment)))}}}
    {{/if}}
    "{{kebabcase prop.type}}-{{kebabcase prop.name}}": "{{{prop.value}}}",
  {{/each}}
  }`);



var metaHeader = `
/* ----------------------- */
/* 🎂 Cupcake Sprinkles 🎂 */
/* imported from: ${pkg.name} version: ${pkg.version} */
/* DO NOT MODIFY THIS FILE DIRECTLY! */
/* ALL VALUES COME FROM THE ${pkg.name} PACKAGE */
/* ----------------------- */
`;


// This runs the task over the files making a map based on default variables
gulp.task('tokens:map', (done) => {
      gulp.src([
        config.tokens.input + '/*.yml',
        '!./src/tokens/index.yml',
        '!./src/tokens/_aliases.yml',
        '!./src/tokens/colors-map.yml',
        '!./src/tokens/color.yml'
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
          .pipe(concat('_maps.scss'))
          .pipe(gulp.dest(config.tokens.output))
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
      .pipe(concat('_variables.scss'))
      .pipe(gulp.dest(config.tokens.output))
done();
});


gulp.task('tokens:colors-map', (done) => {
      gulp.src(config.tokens.input + '/colors-map.yml')
          .pipe(gulpTheo({
              transform: { includeMeta: true },
              format: { type: 'deep' }
          }))
          .pipe(rename(function(path) {
              path.basename = '_colors-map';
              path.extname = ".scss";
          }))
          .pipe(gulp.dest(config.tokens.output))
  done();
});



gulp.task('tokens:merge', (done) => {
  gulp.src(['./src/scss/support/_variables.scss', './src/scss/support/_colors-map.scss', './src/scss/support/_maps.scss'])
      .pipe(vinylPaths(del))
      .pipe(concat('_tokens.scss'))
      .pipe(addHeader(metaHeader))
      .pipe(gulp.dest(config.tokens.output))
done();
});


gulp.task('copy:tokens', (done) => {
  return gulp
    .src('./src/tokens/dist/_tokens.scss')
    .pipe(gulp.dest('./src/scss/support'))
    done();
});
