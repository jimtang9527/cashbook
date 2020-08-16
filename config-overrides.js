const {
    override,
    addBabelPlugins
} = require('customize-cra')
module.exports = override(addBabelPlugins(
    ["babel-plugin-root-import", {
        "rootPathSuffix": "src",
        "rootPathPrefix": "~"
    }], ["@babel/plugin-proposal-decorators", {
        "legacy": true
    }]
))