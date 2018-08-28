const path = require('path');
const sassTrue = require('sass-true');

const initCustomMixins = path.join(__dirname, 'init-custom-mixins.scss');
sassTrue.runSass({file: initCustomMixins}, describe, it);

const initCustomFunctions = path.join(__dirname, 'init-custom-functions.scss');
sassTrue.runSass({file: initCustomFunctions}, describe, it);

const initCustomConfig = path.join(__dirname, 'init-custom-config.scss');
sassTrue.runSass({file: initCustomConfig}, describe, it);
