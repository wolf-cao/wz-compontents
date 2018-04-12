const path = require('path')
const utils = require('./packages/Utils')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // production
  mode: 'development',
  entry: {
    app: './src/index.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '组件| components',
      template: './src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ['less-loader', 'css-loader', 'style-loader']
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: 'babel-loader!eslint-loader'
          }
        }
      },
      {
        test: /\.md$/,
        use: ['vue-markdown-loader']
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  }
}
