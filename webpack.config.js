const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装

module.exports = {
  entry: {
    app: [path.join(__dirname, 'src/index.js'), path.join(__dirname, 'src/index1.js'), path.join(__dirname, 'src/index2.js')]
  },
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, 'dist'),
    chunkFilename: "[name].chunk.js"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  mode: 'production',
  resolve: { // 文件路径自动补齐
    extensions: ['.js', '.vue']
  },
  devServer: {
    // hot: true
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'async',
  //     minSize: 30000,
  //     maxSize: 0,
  //     minChunks: 1,
  //     maxAsyncRequests: 5,
  //     maxInitialRequests: 3,
  //     automaticNameDelimiter: '~',
  //     name: true,
  //     cacheGroups: { // cacheGroups里的命名自定义
  //       vendors: { // node_modules里的多次引用 会打包在这里
  //         priority: 1,
  //         test: /[\\/]node_modules[\\/]/, // test 正则匹配文件所在文件夹
  //         chunks: 'initial',
  //         minChunks: 2, // 重复1次才能打包到此模块
  //         name: 'vendors',
  //       },
  //       commons:{
  //         chunks: 'initial',
  //         name: 'commons', // 打包后的文件名
  //         minSize: 0, 
  //         minChunks: 2 // 重复2次才能打包到此模块
  //       },
  //     }
  //   }
  // },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({ template: './index.html'}), //  为应用程序生成一个模板为template的HTML，并自动注入所有生成的 bundle。
	],
}