const{resolve}=require('path')
//plugins需要引入
const HtmlWebpackPlugin=require('html-webpack-plugin')
module.exports={
    entry:'./src/index.js',
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
        })
    ],
    mode:'development'
}