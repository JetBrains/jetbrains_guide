require('source-map-support').install()
require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'es2017'
  }
})

exports.onCreateNode = require('./src/config/createNode')
exports.createPages = require('./src/config/createPages')
exports.sourceNodes = require('./src/config/sourceNodes')
exports.createResolvers = require('./src/config/createResolvers')

// New-style
const { setupSchemaCustomizations } = require('./src/config2/schemaCustomizations')
exports.createSchemaCustomization = setupSchemaCustomizations

const { setupCreatePages } = require('./src/config2/createPages')
exports.createPages = setupCreatePages

const { setupCreateNode } = require('./src/config2/createNode')
exports.onCreateNode = setupCreateNode
