var webpackConfig = require('./webpack.config.js');

module.exports = function(grunt) {
    grunt.initConfig({
        webpack: {
            options: {
                keepalive: false
            },
            dev: webpackConfig
        },
        wait: {
            options: {
                delay: 15000
            },
            pause: {}
        },
        clean: {
            dev: ['./generated_file.js']
        }
    });

    grunt.loadTasks('grunt_tasks');

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-wait');
    grunt.loadNpmTasks('grunt-webpack');

    grunt.registerTask('default', [
        // 'clean', // clean generated file
        'generate-file', // create generated file with new content
        'webpack:dev', // build webpack bundles
        'wait' // run some async task
    ]);
};
