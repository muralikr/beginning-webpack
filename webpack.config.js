module.exports = {
  entry: ["./app.js"],
  output: {
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
