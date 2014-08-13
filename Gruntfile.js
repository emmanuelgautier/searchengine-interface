'use strict';

module.exports = function (grunt) {

  grunt.initConfig({
    jshint: {
      // define the list to lint
      files: [
        'Gruntfile.js',
        'app.js',
        'seed.js',
        'socket-room.js',
        'config/*.js',
        'app/**/*.js'
      ],
      // configure JSHint
      options: {
        jshintrc: '.jshintrc'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['jshint']);
};
