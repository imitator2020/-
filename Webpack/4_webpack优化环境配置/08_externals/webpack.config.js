const{resolve}=require('path')
//plugins需要引入
const HtmlWebpackPlugin=require('html-webpack-plugin')
module.exports={
    entry:'./src/js/index.js',
    output:{
        filename:'js/built.js',
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
    mode:'development',
    externals:{
        jquery:'jQuery'
    }
}