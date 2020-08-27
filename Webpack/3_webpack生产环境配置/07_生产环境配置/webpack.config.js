const{resolve}=require('path')
const MiniCssExtractPlugin=require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin=require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin=require('html-webpack-plugin')

//定义nodejs环境变量，决定使用browserlist的哪个环境
process.env.NODE_ENV='production'
//复用loader
const commonCssLoader=[
    MiniCssExtractPlugin.loader,
    'css-loader',
    //兼容性处理
    {   //需要在package.json文件中定义browserlist
        loader:'postcss-loader',
        options:{
            indent:'postcss',
            plugins:()=>[
                require('postcss-preset-env')()
            ]
        }
    }
];
module.exports ={
    entry:'./src/js/index.js',
    output:{
        filename:'js/built.js',
        path:resolve(__dirname,'build')
    },
    module:{
        rules:[
            {   //css的loader
                test:/\.css$/,
                use:[...commonCssLoader]
            },
            {   //less的loader
                test:/\.less$/,
                use:[...commonCssLoader,'less-loader']
            },
            {   //js语法检测的loader
                // 在package.json中eslintConfig --> airbnb
                test: /\.js$/,
                //排除下载的第三方库文件的语法检测
                exclude: /node_modules/,
                //由于js同时用到了语法检测和兼容性处理两个loader，故需要设置loader的加载顺序，设置语法检测先加载
                enforce:'pre',
                loader:'eslint-loader',
                options:{
                    fix:true,
                }

            },
            {   //js的兼容性处理的loader
                test: /\.js$/,
                //排除第三方库
                exclude: /node_modules/,
                loader:'babel-loader',
                options:{
                    //预设
                    presets:[
                        [
                            '@babel/preset-env',
                            {
                                //按需加载
                                useBuiltIns:'usage',
                                //指定corejs版本：
                                corejs:{
                                    version:3
                                },
                                //兼容指定版本浏览器
                                targets:{
                                    chrome:'60',
                                    firefox:'50',
                                    safari:'10',
                                    edge:'17',
                                    ie:'8'
                                    
                                }
                            }   
                        ]
                    ]
                }
            },
            {   //图片处理的loader
                test: /\.(jpg|png|gif)/,
                loader:'url-loader',
                options:{
                    limit:8*1024,
                    name:'[hash:10].[ext]',
                    outputPath:'imgs',
                    //关闭es6模块化方法，以便能处理html文件中的图片
                    esModule:false
                }
            },
            {
                //处理html文件中的loader
                test: /\.html$/,
                loader:'html-loader',
            },
            {
                //处理其他文件
                exclude:/\.(js|html|css|less|jpg|png|gif)/,
                loader:'file-loader',
                //打包后的输出路径
                options:{
                    outputPath:'media'
                }
            }
        ]
    },
    plugins:[
        //提取css文件
        new MiniCssExtractPlugin=({
            filename:'css/main.css'
        }),
        //压缩css
        new OptimizeCssAssetsWebpackPlugin(),
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