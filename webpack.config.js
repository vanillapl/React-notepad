var webpack = require('webpack');
module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'webpack/hot/only-dev-server',
    './src'
  ],
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015','react']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.coffee','.js']
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()]
}
