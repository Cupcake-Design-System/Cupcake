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
    source: 'scss',
    build: 'dist',
    docs: 'docs'
  },

  server: {
    port: 4000,
    notify: true,
    open: true,
    logPrefix: `Serving your Cupcake 🎂`
  },

  styles: {
    source: 'scss',
    build: 'dist',
    docs: 'build/html'
  },

  html: {
    all: 'build/html/**/*.{html,md,json,yml}',
    pages: 'build/html/views/pages/**/*',
    layouts: 'build/html/views/layouts/**/*',
    layoutIncludes: ["build/html/views/layouts/includes/**/*", 'layout/**/*.html'],
    views: ['build/html/views/**/*', '!build/html/views/+(layouts)/**'],
    data: ['build/html/data/**/*.{json,yml}'],
    docs: 'build/html/docs/**/*.md',
    core: ['build/html/core/**/*'],
    build: 'docs'
  }
};
