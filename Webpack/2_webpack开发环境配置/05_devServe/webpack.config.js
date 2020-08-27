const{resolve}=require('path');
const HtmlWebpackPlugins=require('html-webpack-plugin');

module.exports={
    entry: './src/index.js',
    output:{
        filename: 'built.js',
        path: resolve(__dirname,'build')
    },
    module: {
        rules:
        [
            {
                test: /\.css$/,
                use:['style-loader', 'css-loader']
            },
            //打包其他资源
            {   //排除其他资源，这里排除css,html,js
                exclude: /\.(css|js|html|less)$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugins({
            template:'./src/index.html'
        })
    ],
    mode:'development',
    devServer:{
        contentBase: resolve(__dirname,'build'),
        //开启GZIP压缩
        compress: true,
        //端口号：
        port:3000
    }

}