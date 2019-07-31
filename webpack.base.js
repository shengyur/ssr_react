module.exports = {
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