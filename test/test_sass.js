const path = require('path');
const sassTrue = require('sass-true');

const initCustomMixins = path.join(__dirname, 'init-custom-mixins.scss');
sassTrue.runSass({file: initCustomMixins}, describe, it);

const initCustomFunctions = path.join(__dirname, 'init-custom-functions.scss');
sassTrue.runSass({file: initCustomFunctions}, describe, it);

// const initCustomConfig = path.join(__dirname, 'init-custom-config.scss');
// sassTrue.runSass({file: initCustomConfig}, describe, it);

const avatar = path.join(__dirname, 'avatar.scss');
sassTrue.runSass({file: avatar}, describe, it);

const badges = path.join(__dirname, 'badges.scss');
sassTrue.runSass({file: badges}, describe, it);

const closeMixin = path.join(__dirname, 'close-mixin.scss');
sassTrue.runSass({file: closeMixin}, describe, it);

const typography = path.join(__dirname, 'typography.scss');
sassTrue.runSass({file: typography}, describe, it);

const shadows = path.join(__dirname, 'shadows.scss');
sassTrue.runSass({file: shadows}, describe, it);

const spacing = path.join(__dirname, 'spacing.scss');
sassTrue.runSass({file: spacing}, describe, it);

const radius = path.join(__dirname, 'radius.scss');
sassTrue.runSass({file: radius}, describe, it);
