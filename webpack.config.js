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
    }
}