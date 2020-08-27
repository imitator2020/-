
const {resolve} =require('path')
const webpack = require('webpack')
module.exports ={
    entry:{
        //最终打包生成的name:['jquery']要打包的库
        jquery:['jquery'],
    },
    output:{
        filename:'[name].js',
        path:resolve(__dirname,'dll'),
        library:'[name]_[hash]' //打包后的库向外暴露出去的变量的名字
    },
    plugins:[
        new webpack.DllPlugin({
            //打包生成一个映射库
            name:'[name]_[hash]',
            path:resolve(__dirname,'dll/mainfest.json')
        })
    ],
    mode:'production',

}