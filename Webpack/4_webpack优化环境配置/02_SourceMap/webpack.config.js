
const{resolve}=require('path');
const HtmlWebPackPlugin=require('html-webpack-plugin')

module.exports={
    entry:'./js/index.js',
    output:{
        filename:'built.js',
        path:resolve(__dirname,'build')
    },
    module:{
        rules:[
            //处理less的loader配置
            {
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader']
            },
            //处理css的Loader配置
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            //处理样式文件中的图片的loader的配置
            {
                test:/\.(jpg|png|gif)$/,
                loader:'url-loader',
                options: {
                    limit:8*1024,//小于8k的图片会以base64的编码嵌入
                    esModule:false,//关闭esModule编码。因为除了html中的图片用的是commonjs的编码，如果不关闭，会处理出错
                    name:'[hash:10].[ext]',//重命名，取hash值的前10位
                    outputPath:'imgs'
                }
            },
            //处理html中的图片的loader
            {
                test:/\.html$/,
                loader:'html-loader',
                // options:{
                //     limit:8*1024,
                //     name:'[hash:10].[ext]',
                // }
            },
            //处理其他文件
            {
                exclude:/\.(html|css|js|less|jpg|png|gif)$/,
                loader:'file-loader',
                options: {
                    name:'[hash:10].[ext]',
                    outputPath:'media'
                }
            }
        ]
    },
    //插件配置
    plugins:[
        new HtmlWebPackPlugin({
            template:'./src/index.html'
        })
    ],
    mode:'development',
    devServer: {
        contentBase:resolve(__dirname,'build'),
        port:3000,
        compress:true,//开启GZIP压缩
        open:true//打开浏览器
    },
    devtool:'eval-source-map',
}