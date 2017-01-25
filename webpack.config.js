/**
 * Created by mewtwo on 2017/1/25.
 */

'use strict';

const webpack = require('webpack');

module.exports = {
    context:__dirname+'/src',
    entry:{
        app:'./app.js'
    },
    output:{
        path:__dirname+'/dist',
        filename:'[name].bundle.js'
    },
    plugins:[
        new webpack.optimize.CommonsChunkPlugin({
            name:'commons',
            filename:'commons.js',
            minChunks:2
        })
    ],
    module:{
        rules:[
            {
                test:/\.js$/,
                use:[
                    {
                        loader:'babel-lodaer',
                        options:{presets:['es2015']}
                    }
                ]
            },
            {
                test:/\.css$/,
                use:['style-loader',{ loader: "css-loader", options: { modules: true }}]
            }
        ]
    }
}