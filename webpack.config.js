const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path');

module.exports = {
  entry: {
    bundle: './src/app.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  devServer: {
    contentBase: 'dist',
    port: 3000,
    host: '0.0.0.0'
  },

  devtool: 'sorce-map',

  module: {
    rules:[
      {
        test: /\.jsx?$/,
        exclude: [ path.resolve(__dirname, "node_modules")],
        loader: "babel-loader",
        options:{
          presets: ["react", "es2015"]
        }
      },
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          loader: ['css-loader', 'postcss-loader']
        })
      },
      {
        test: /\.(jpeg|jpeg|png|svg)$/,
        use: 'file-loader?name=assets/[name].[ext]'
      },
      {
        test: /\.jsX?$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        enforce: "pre",
        options: {
          fix: true,
          failOnError: true,
        }
      },
    ],
  },

  plugins: [
    new ExtractTextPlugin('bundle.css')
  ]
}
