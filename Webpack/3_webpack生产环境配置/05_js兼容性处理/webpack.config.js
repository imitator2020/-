
const{resolve}=require('path');
const HtmlWebPackPlugins=require('html-webpack-plugin');

module.exports={
    entry:'./src/js/index.js',
    output:{
        filename:'js/built.js',
        path:resolve(__dirname,'build')
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options:{
                    //预设：指示babel做怎样的兼容性处理
                    presets:[
                    [
                        '@babel/preset-env',
                        {
                            //按需加载
                            useBuiltIns:'usage',
                            //指定core-js版本
                            corejs:{
                                version:3
                            },
                            // 指定兼容性做到哪个浏览器版本
                            targets:{
                                chrome:'60',
                                firefox:'60',
                                ie:'7',
                                safari:'10',
                                edge:'17'
                    
                    
                            }
                        }
                    ]
                ]
                }
            
            }
        ]
    },
    plugins:[
        new HtmlWebPackPlugins({
            template:'./src/index.html'
        })
    ],
    mode:'development'

}