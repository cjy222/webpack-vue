const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // build使用的styleloader
const env = require('./env');

module.exports = {
  mode: 'production',
  entry: {
    app: path.join(__dirname, 'src/index.js')
  },
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, 'dist/static/js'),
    chunkFilename: "[name].chunk.js"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          // devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          MiniCssExtractPlugin.loader,
          {
						loader: 'css-loader',
						options: {
						// 开启 CSS Modules
							modules: {
								localIdentName: '[hash]_[name]'
							},
						}
					},
          'postcss-loader'
        ]
      },
    ]
  },
  resolve: { // 文件路径自动补齐
    extensions: ['.js', '.vue']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: './static/css/[name].css',
      chunkFilename: './static/css/[id].css',
    }),
    // new webpack.HotModuleReplacementPlugin(), // 热替换 发现在dev-server模式下注释了也还有用？
    new HtmlWebpackPlugin({ template: './index.html'}), //  为应用程序生成一个模板为template的HTML，并自动注入所有生成的 bundle。
	],
}