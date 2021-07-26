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
      {
        test: /\.(jpg | png | gif)$/,
         loader: 'url-loader',
        options: {
          // 图片大小小于8kb, 就会被base64所处理，
          // 减少请求的数量（减轻服务器的压力）
          //缺点： 体积会跟大（请求速度会更慢）
          limit: 8 * 1024,
          esModule: false,
          name: '[hash: 10].[ext]'
        },
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        exclude: /\.(css| js | less)$/,
        loader: 'file-loader'
      }
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