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
    var webcam = require('webcam-capture');

    grunt.registerMultiTask('screencap', 'Take automatic screenshots and webcam selfies with grunt.', function() {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
            // Custom options here if any
            webcam: true,
            desktop: true
        });
        
        grunt.file.mkdir('tmp');
        
        var timestamp = new Date().getTime();
        
        if (options.desktop) {
            var done = this.async();
            var filenameDesktopScreenshot = 'tmp/screenshot' + timestamp + '.png';
            desktopScreenshot(filenameDesktopScreenshot, function(error, complete) {
                if (!error) {
                    console.log('Screenshot captured, filename: ' + filenameDesktopScreenshot);
                } else {
                    console.error(error);
                }
                done();
            });
        }
        
        if (options.desktop) {
            var filenameWebcam = 'tmp/webcam' + timestamp + '.jpg';
            var spawn = webcam({ out: filenameWebcam });  // Todo: Patch this plugin to have a proper callback
        }
    });

};
