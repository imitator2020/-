const{resolve}=require('path')
//plugins需要引入
const HtmlWebpackPlugin=require('html-webpack-plugin')
const webpack = require('webpack')
const AddAssetHtmlWebpackPlugin=require('add-asset-html-webpack-plugin')
module.exports={
    entry:'./src/js/index.js',
    output:{
        filename:'built.js',
        path:resolve(__dirname,'build')
    },
    module:{
        rules:[]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),
        //告诉webpack哪些第三方库文件不参与打包
        new webpack.DllReferencePlugin({
            manifest:resolve(__dirname,'dll/mainfest.json')
        }),
        //把单独打包好的第三方库进行引入
        new AddAssetHtmlWebpackPlugin({
            filepath:resolve(__dirname,'dll/jquery.js')
        })
    ],
    mode:'production'
}