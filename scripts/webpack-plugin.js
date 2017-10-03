class CustomPlugin {
    constructor(options) {
        this.options = options || {};
    }

    // Webpack supported event hooks: https://webpack.js.org/api/plugins/compiler/#event-hooks
    apply(compiler) {
        // When webpack starts compiling entry in non-watch mode
        compiler.plugin('run', (compilation, callback) => {
            console.log(`\rIn run event`);

            // debugger;
            callback();
        });

        compiler.plugin('watch-run', (compilation, callback) => {
            // When webpack starts compiling entry in watch mode
            console.log(`\rIn watch-run event`);

            debugger;
            callback();
        });

        compiler.plugin('after-compile', (compilation, callback) => {
            // When webpack completes compiling for one entry
            console.log(`\rIn after-compile event`);
            callback();
        });
    }
}

module.exports = CustomPlugin;
