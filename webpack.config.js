/**
 * webpack 配置文件
 * webpack 打包会自动使用 webpack.config.js 作为其配置文件去打包
 * 将 webpack 配置规则写到一个对象中直接导出
 * 注意：该文件不会被打包，它是工具的配置文件
 * 注意：该文件基于 Node 运行，所以可以编写 Node 代码
 */
// "build": "webpack --config webpack.config.js" 默认会根据--config webpack.config.js 来配置文件

const path = require('path')

module.exports = {
    entry: './src/index.js', // 打包的入口
    output: {
        path: path.join(__dirname, './dist'), // 将打包结果放到 dist 目录中
        filename: 'main.js' // 自定打包结果的文件名
    },
    /**
     * mode 打包模式，如果没有指定，默认使用 production 模式打包
     * development 开发模式打包，打包速度快，不会优化打包结果
     * production  生产模式打包，打包速度慢，会优化打包结果
     * 建议：开发使用 development，发布上线使用 production
     */
    mode: 'development'
}