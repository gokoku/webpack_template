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
        test: /\.(jpeg|jpeg|png)$/,
        use: 'file-loader?name=assets/[name].[ext]'
      }
      
    ]
  },

  plugins: [
    new ExtractTextPlugin('bundle.css')
  ]
}
