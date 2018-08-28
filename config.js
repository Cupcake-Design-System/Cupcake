import pkg from './package';

export default {
  name: pkg.name,
  version: pkg.version,
  description: pkg.description,
  author: pkg.author,
  header: `
  /* 🎂 CUPCAKE 🎂 */
  /* pkg name: ${pkg.name} */
  /* version: ${pkg.version} */
  `,
  footer: `
  /* 🎂 CUPCAKE 🎂 */
  /* END */
  /* ----------------------- */
  `,

  root: __dirname,

  paths: {
    source: 'src',
    build: 'dist'
  },

  assets: {
    source: 'src/assets',
    build: 'dist/assets'
  },

  server: {
    port: 4000,
    notify: true,
    open: true
  },

  styles: {
    source: 'src',
    build: 'dist',
    tokens: 'dist/tokens'
  },

  color: {
    source: 'src/color',
    partials: 'src/color/templates/partials/*',
    templates: 'src/color/templates/*.hbs',
    build: 'src/color'
  },

  scripts: {
    source: 'src/scripts',
    build: 'dist/assets/scripts'
  },

  html: {
    all: 'html/**/*.{html,md,json,yml}',
    pages: 'html/views/pages/**/*',
    layouts: 'html/views/layouts/**/*',
    layoutIncludes: ["html/views/layouts/includes/**/*", 'src/layout/**/*.html'],
    views: ['html/views/**/*', '!html/views/+(layouts)/**'],
    data: ['html/data/**/*.{json,yml}'],
    core: 'src/core/**/*.html',
    build: 'dist'
  },


  fonts: {
    source: 'src/fonts',
    build: 'dist/assets/fonts'
  }
};
