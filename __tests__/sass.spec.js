const path = require('path');
const sassTrue = require('sass-true');
const glob = require('glob');


const sassTestFiles = glob.sync(path.resolve(process.cwd(), '__tests__/**/*.spec.scss'))

// Run True on every file found with the describe and it methods provided
sassTestFiles.forEach(file =>
  sassTrue.runSass({ file }, {describe, it})
)
