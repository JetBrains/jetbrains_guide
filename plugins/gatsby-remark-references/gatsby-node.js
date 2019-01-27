require('source-map-support').install();
require('ts-node').register({
    compilerOptions: {
        module: 'commonjs',
        target: 'es2017'
    }
});

exports.onCreateNode = require('./src/createNode');
exports.createPages = require('./src/createPages');

