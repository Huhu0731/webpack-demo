/**
 * webpack 配置文件
 * webpack 打包会自动使用 webpack.config.js 作为其配置文件去打包
 * 将 webpack 配置规则写到一个对象中直接导出
 * 注意：该文件不会被打包，它是工具的配置文件
 * 注意：该文件基于 Node 运行，所以可以编写 Node 代码
 */
// "build": "webpack --config webpack.config.js" 默认会根据--config webpack.config.js 来配置文件

const path = require('path')
// 打包HTML资源
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 清除dist目录之前的缓存
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: './src/index.js', // 打包的入口
    plugins: [ 
        // 打包HTML资源
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        // 清除dist目录之前的缓存
        new CleanWebpackPlugin()
    ],
    output: { // 打包出口
        path: path.join(__dirname, './dist'), // 将打包结果放到 dist 目录中
        filename: 'main.js' // 自定打包结果的文件名
    },
    /**
     * mode 打包模式，如果没有指定，默认使用 production 模式打包
     * development 开发模式打包，打包速度快，不会优化打包结果
     * production  生产模式打包，打包速度慢，会优化打包结果
     * 建议：开发使用 development，发布上线使用 production
     */
    mode: 'development',
    module: {
        rules: [
        /**
         * 当 test 匹配到以 .css 结尾的文件资源的时候 use css-loader 和 style-loader 处理
         * 首先它使用 css-loader 将 css 转为 JavaScript 模块，模块存储的就是 css 文件字符串
         * 然后使用 style-loader 生成一段代码：在运行期间，生成 style 节点，插入页面的 head 中
         * 注意：老外的思维的都是反的，后面的是先执行的，不要把 loader 的顺序配置错了
         */
        { // 打包css资源
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        },
        { // 打包图片资源
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {},
                },
            ],
        },
        {// 将es6换为es5
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/, // 排除第三方包
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'], // 转换规则
                    cacheDirectory: true // 开启缓存
                }
            }
        }
        ]
    }
}