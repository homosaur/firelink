module.exports = {
  'extends': [
    'standard',
    'standard-flow'
  ],
  'installedESLint': true,
  'plugins': [
    'standard',
    'promise'
  ],
  'env': {
    'browser': true,
    'node': true,
    'es6': true,
    'mocha': true
  },
  'rules': {
    'no-var': 2,
    'prefer-const': 2
  }
}
