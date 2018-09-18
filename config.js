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
    scss: 'scss',
    build: 'dist',
    docs: 'docs'
  },

  tokens: {
    input: 'src/tokens',
    output: 'src/scss/tokens',
    formats: 'dist/formats'
  },

  server: {
    port: 4000,
    notify: true,
    open: true,
    logPrefix: `Serving your Cupcake 🎂`
  },

  styles: {
    source: 'src/scss',
    build: 'dist',
    docs: 'src/docs'
  },

  html: {
    all: 'src/docs/**/*.{html,md,json,yml}',
    pages: 'src/docs/views/pages/**/*',
    layouts: 'src/docs/views/layouts/**/*',
    layoutIncludes: ["src/docs/views/layouts/includes/**/*", 'layout/**/*.html'],
    views: ['src/docs/views/**/*', '!src/docs/views/+(layouts)/**'],
    data: ['src/docs/data/**/*.{json,yml}'],
    docs: 'src/docs/docs/**/*.md',
    core: ['src/docs/core/**/*'],
    build: 'docs'
  }
};
