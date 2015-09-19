/*
 * grunt-screencap
 * https://github.com/jehna/grunt-screencap
 *
 * Copyright (c) 2015 Jesse Luoto
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
    
    var screenshot = require('desktop-screenshot');

    grunt.registerMultiTask('screencap', 'Take automatic screenshots and webcam selfies with grunt.', function() {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
            // Custom options here if any
        });
        
        var done = this.async();
        
        grunt.file.mkdir('tmp');
        
        var filename = 'tmp/screenshot' + (new Date().getTime()) + '.png';
        screenshot(filename, function(error, complete) {
            if (!error) {
                console.log('Screenshot captured, filename: ' + filename);
            } else {
                console.error(error);
            }
            done();
        });
    });

};
