const webpack = require('webpack');
// extrair texto para realizar a leitura do arquivo css
const ExtractTextPlugin = require('extract-text-webpack-plugin')

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
    plugins:[
        new ExtractTextPlugin('app.css')
    ],
    module:{
        loaders:[{
            test:/.js?$/,// apenass *.js
            loader: 'babel-loader', 
            exclude: /node_modules/, //retirar arquivos node_modules
            query:{
                presets:['es2015','react'],// o que eu vou traduzir (transpile)
                plugins: ['transform-object-rest-spread']
            }
        },{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        }]
    }
}