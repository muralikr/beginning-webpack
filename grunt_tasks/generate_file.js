'use strict';

var path = require('path');

module.exports = function(grunt) {
    grunt.registerTask('generate-file', function() {
        grunt.file.write('./generated_file.js', "console.log('SOME_RANDOM_HASH');\n");
        grunt.log.ok('Created new file');
    });
};
