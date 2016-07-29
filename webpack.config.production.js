const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'index.js',
    path: './dist'
  },
  plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': "'production'"
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false
        }
      })
    ],

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.css$/, loaders: [
          'style',
          'css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]'
        ]
      }
    ]
  }
};
