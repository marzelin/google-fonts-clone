module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'index.js',
    path: './dist'
  },

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
