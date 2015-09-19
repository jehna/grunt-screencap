/*
 * grunt-screencap
 * https://github.com/jehna/grunt-screencap
 *
 * Copyright (c) 2015 Jesse Luoto
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                '<%= nodeunit.tests %>'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        // Before generating any new files, remove any previously-created files.
        clean: {
          tests: ['tmp']
        },

        // Configuration to be run (and then tested).
        screencap: {
            default_options: {
                options: {
                },
            }
        },

        // Unit tests.
        nodeunit: {
            tests: ['test/*_test.js']
        },
        
        watch: {
            default: {
                files: ['**/*.js'],
                tasks: ['test'],
                options: {
                    spawn: false,
                },
            }
        }

    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['clean', 'screencap', 'nodeunit']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'test']);

};
