require('source-map-support').install();
require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'es2017'
  }
});

// typescript files
exports.createPages = require('./lib/createPages');
exports.onCreateNode = require('./lib/createNode');

