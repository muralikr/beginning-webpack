var CustomPlugin = require('./scripts/webpack-plugin');

module.exports = {
    entry: ['./app.js'],
    output: {
        filename: 'bundle.js'
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
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.es6']
    },
    plugins: [
        // Docs: https://webpack.js.org/configuration/plugins/
        new CustomPlugin()
    ],
    devtool: 'eval-source-map',
    watch: true
};
