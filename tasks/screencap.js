/*
 * grunt-screencap
 * https://github.com/jehna/grunt-screencap
 *
 * Copyright (c) 2015 Jesse Luoto
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
    
    var desktopScreenshot = require('desktop-screenshot');

    grunt.registerMultiTask('screencap', 'Take automatic screenshots with grunt (OSX only).', function() {
        var options = this.options({
        });
        
        if (typeof options.output !== 'string') {
            grunt.error('No \'output\' parameter defined. Exiting...');
            return;
        }
        
        var filenameCorrection = /(.*)\.(png)?|(.*)/.exec(options.output);
        filenameCorrection = filenameCorrection[1] ? filenameCorrection[1] : filenameCorrection[3];
        
        var timestamp = new Date().getTime();
        var filename = filenameCorrection + timestamp + '.png';
        
        var done = this.async();
        grunt.file.write(filename, '');  // Write empty file to make sure folder exists
        desktopScreenshot(filename, function(error, complete) {
            if (!error) {
                console.log('Screenshot captured, filename: ' + filename);
            } else {
                console.error(error);
            }
            done();
        });
    });

};
