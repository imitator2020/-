
const {resolve}=require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    entry:'./src/index.js',
    output:{
        filename:'built.js',
        path:resolve(__dirname,'build')
    },
    module:{
        rules:[
            {   //配置loader文件来加载less文件
                test:/\.less$/,
                use: ['style-loader','css-loader','less-loader']
            },
            {
                //配置loader加载less当中的图片资源，需要下载url-lodaer以及url-loader所依赖的file-loader
                test:/\.(jpg|png|gif)$/,
                loader:'url-loader',
                options:{
                    //小于8k的图片会被base64处理
                    limit:8*1024,
                    esModule:false,
                    name:'[hash:10].[ext]'
                }

            },
            //处理html文件的图片
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ],
    mode:'development'
}