const{resolve}=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')

//定义nodejs环境变量，决定使用browserlist的哪个环境
process.env.NODE_ENV='production'

module.exports ={
    //单入口
    //entry:'./src/js/index.js',
    //多入口
    entry:{
        index:'./src/js/index.js',
        test:'./src/js/test.js'
    },
    output:{
        filename:'js/[name].[contenthash:10].js',
        path:resolve(__dirname,'build')
    },
  
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            //压缩html代码
            minify:{
                collapseWhitespace:true,
                removeComments:true,
            }
        }),
        
    ],
    mode:'production'

}