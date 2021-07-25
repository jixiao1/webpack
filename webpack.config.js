const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  // webpack的核心配置
  // 入口配置
  entry: './src/index.js',
  // 出口配置
  output: {
    filename: 'built.js', // 出口文件名
    path: path.resolve(__dirname, 'dist')
  },
  // module  loader的配置
  module: {
    // 详细loader的配置
    rules: [
      {
        // 匹配哪些文件
        test: /\.css$/,
        // 创建style-loader的目的是创建style标签，然后将你的js代码插入到你的
          //添加到header中生效
         // 将css变成common.js的模块加载到js中， 里面都是字符串
        use: ['style-loader', 'css-loader']
      },
      {
        // 匹配哪些文件
        test: /\.less$/,
        // 创建style-loader的目的是创建style标签，然后将你的js代码插入到你的
          //添加到header中生效
         // 将css变成common.js的模块加载到js中， 里面都是字符串
        use: ['style-loader', 'css-loader', 'less-loader']
      },
    ]
  },
  // 插件的配置
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  // 模式 分为生产模式（production）和开发模式（development)
  // mode: 'production',
  mode: 'development',
}