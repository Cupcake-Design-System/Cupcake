const path = require('path');
const sassTrue = require('sass-true');

const initCustomMixins = path.join(__dirname, 'init-custom-mixins.scss');
sassTrue.runSass({file: initCustomMixins}, describe, it);

const alert = path.join(__dirname, 'test-alert.scss');
sassTrue.runSass({file: alert}, describe, it);

const avatar = path.join(__dirname, 'test-avatar.scss');
sassTrue.runSass({file: avatar}, describe, it);

const badges = path.join(__dirname, 'test-badges.scss');
sassTrue.runSass({file: badges}, describe, it);

const buttons = path.join(__dirname, 'test-button.scss');
sassTrue.runSass({file: buttons}, describe, it);

const cards = path.join(__dirname, 'test-cards.scss');
sassTrue.runSass({file: cards}, describe, it);

const switches = path.join(__dirname, 'test-switches.scss');
sassTrue.runSass({file: switches}, describe, it);

const closeMixin = path.join(__dirname, 'test-close-mixin.scss');
sassTrue.runSass({file: closeMixin}, describe, it);

const shadows = path.join(__dirname, 'test-shadows.scss');
sassTrue.runSass({file: shadows}, describe, it);

const spacing = path.join(__dirname, 'test-spacing.scss');
sassTrue.runSass({file: spacing}, describe, it);

const radius = path.join(__dirname, 'test-radius.scss');
sassTrue.runSass({file: radius}, describe, it);

// const typography = path.join(__dirname, 'test-typography.scss');
// sassTrue.runSass({file: typography}, describe, it);
