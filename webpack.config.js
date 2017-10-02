const path = require('path');

module.exports = {
  entry: ["./app.js"],
  output: {
    // In prod deployment, move bundles from `dist` to `staticAssets` folder
    publicPath: '/staticAssets',
    pathinfo: true,
    path: path.resolve(__dirname, 'dist'), // Save bundles in `dist` folder for development.
    filename: "bundle.js"
  },
  module: {
   
    loaders: [
      {
        test: [/\.js$/, /\.es6$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'] 
        }
      },
      {
        test: [/\.js$/, /\.es6$/],
        exclude: /node_modules/,
        loader: 'test-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.es6']
  },
  resolveLoader: {
    // Docs: https://webpack.js.org/configuration/resolve/#resolveloader
    alias: {
      'test-loader': './test-loader.js'
    }
  }
};
