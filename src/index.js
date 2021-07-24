// webpack 分为入口和出口
// index.js ：webpack 入口起点文件
/*

  运行命令：
  开发环境：webpack bundle -o  ./dist --mode=development
  webpack 会以./src/index.js为这个入口文件的开始打包，打包后输出到
  ./build/build.js 整体打包的环境， 是开发环境

  webpack打包可以js和json, 不能处理样式资源

*/
// import './index.css'
import data from './index.json'
console.log(data);
function add (x, y) {
  return x+ y;
}
console.log(add(1,2))