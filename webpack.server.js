const path = require('path');
//引入node_modules 时，除了target 还需要webpack-node-externals 如 不引用express
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const baseConf = require('./webpack.base')

const serverConf = {
    target:'node',
    externals:[nodeExternals()],
    mode:'development',
    entry:'./src/server/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'build')
    }
};

module.exports = merge(baseConf,serverConf)