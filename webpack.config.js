const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // build使用的styleloader
const env = require('./env');

module.exports = {
  entry: {
    app: path.join(__dirname, 'src/index.js')
  },
  output: {
    filename: "./static/[name].bundle.js",
    path: path.join(__dirname, 'dist'),
    chunkFilename: "./static/[name].chunk.js"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
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
								localIdentName: '[path][name]__[local]'
							},
						}
					},
          'postcss-loader'
        ]
      },
    ]
  },
  mode: 'production',
  resolve: { // 文件路径自动补齐
    extensions: ['.js', '.vue']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({ template: './index.html'}), //  为应用程序生成一个模板为template的HTML，并自动注入所有生成的 bundle。
	],
}