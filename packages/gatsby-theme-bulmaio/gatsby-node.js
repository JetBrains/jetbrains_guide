require('source-map-support').install();
require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'es2017'
  }
});

exports.onCreateNode = require('./src/config/createNode');
exports.createPages = require('./src/config/createPages');
exports.sourceNodes = require('./src/config/sourceNodes');
exports.createResolvers = require('./src/config/createResolvers');
