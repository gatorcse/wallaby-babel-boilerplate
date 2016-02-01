process.env.NODE_ENV = 'test'
process.env.BABEL_ENV = 'test'

const babelConfig = JSON.parse(require('fs').readFileSync(require('path').join(__dirname, '.babelrc')))
babelConfig.babel = require('babel-core')

module.exports = function (wallaby) {
  // console.log('wallaby babel:::')
  // console.log(wallaby.compilers.babel.toString())
  return {
    files: [
      { pattern: 'client/**/*_spec.js', ignore: true },
      'client/**/*.css',
      'client/**/*.js',
      'client/**/*.jsx'
    ],

    debug: true,

    tests: [
      'client/**/*_spec.js'
    ],

    testFramework: 'mocha',

    compilers: {
      'client/**/*.js': wallaby.compilers.babel(babelConfig),
      'client/**/*.jsx': wallaby.compilers.babel(babelConfig)
    },

    env: {
      type: 'node',
      params: 'NODE_ENV=test'
    }
  }
}
