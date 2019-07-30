const path = require('path');
//引入node_modules 时，除了target 还需要webpack-node-externals 如 不引用express
const nodeExternals = require('webpack-node-externals');

module.exports = {
    target:'node',
    externals:[nodeExternals()],
    mode:'development',
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'build')
    },
    module:{
        rules:[{
            test:/\.js?$/,
            loader:'babel-loader',
            exclude:/node_modules/,
            options: {
                presets: ['@babel/preset-env', '@babel/react'],
                plugins: [
                    ["@babel/plugin-proposal-decorators", { "legacy": true }]
                ]
            }
        }]
    }
}