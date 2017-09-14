const webpack = require('webpack');

module.exports = {
    entry: './ex/index.js',
    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    module:{
        loaders:[{
            test:/.js?$/,// apenass *.js
            loader: 'babel-loader', 
            exclude: /node_modules/, //retirar arquivos node_modules
            query:{
                presets:['es2015','react'],// o que eu vou traduzir (transpile)
                plugins: ['transform-object-rest-spread']
            }
        }]
    }
}