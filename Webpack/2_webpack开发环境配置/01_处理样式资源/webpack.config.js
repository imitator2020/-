// webpack.config.js :webpack的配置文件
// resolve 用来拼接绝对路径的方法
const {resolve}=require('path');

module.exports={
    //webpack配置
    // 入口起点
    entry:'./src/index.js',
    // 输出
    output:{
        // 输出文件名
        filename:'built.js',
        // 输出路径
        // __dirname 是node js的变量，代表当前文件的绝对路径
        path:resolve(__dirname,'build')
    },
    //loader的配置
    module:{
        rules:[
            //详细的loader配置
            //不同文件需要配置不同的loader
            {
                //使用正则表达式匹配文件
                test:/\.css$/,
                //匹配后使用指定的loader处理
                use:[
                    //use数组中Loader执行顺序：从右到左，从上到下
                    
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.less$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    },
    //plugins的配置
    plugins:[

    ],
    //模式，开发模式、生产模式。只能写一个
    mode:'development'
    // mode:'production'

}

