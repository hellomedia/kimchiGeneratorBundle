/*!
 * SmartAdmin's Gruntfile
 * Copyright 2013-2014 MYORANGE INC.
 */

module.exports = function(grunt) {
  'use strict';

  // DEFINE DIRECTORY FOR SMARTADMIN VERSION HERE
  var globalConfig = {
    src: 'Resources/smart-admin',
    dest: '../../../web/assets/admin'
  };

  // DEFINE YOUR VERSION NAME
  grunt.initConfig({
    globalConfig: globalConfig,
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*!\n' +
            ' * SmartAdmin v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright 2011-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' */\n',
    jqueryCheck: 'if (typeof jQuery === \'undefined\') { throw new Error(\'Bootstrap\\\'s JavaScript requires jQuery\') }\n\n',

    // COPY ASSETS FROM ADMINBUNDLE TO WEB/ASSETS/ADMIN
    copy: {
        fonts: {
            expand: true,
            cwd: 'Resources/smart-admin/fonts/',
            src: '**',
            dest: '../../../web/assets/admin/fonts',
            flatten: false,
            filter: 'isFile'
        },
        images: {
            expand: true,
            cwd: 'Resources/smart-admin/img/',
            src: '**',
            dest: '../../../web/assets/admin/img/',
            flatten: false,
            filter: 'isFile'
        }
    },
    // JS TESTING
    'jshint': {
      files: [
        'Gruntfile.js',
        '<%= globalConfig.src %>/unminified_js/app.js',
        '<%= globalConfig.src %>/unminified_js/smartwidgets',
        '<%= globalConfig.src %>/unminified_js/speech'
      ],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },

    // MINIFY JS FILE
    'uglify': {
      options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd") %> */'
      },
      build: {

        // Grunt will search for "**/*.js" under "lib/" when the "uglify" task
        // runs and build the appropriate src-dest file mappings then, so you
        // don't need to update the Gruntfile when files are added or removed.
        files: [{
            expand: true,
            src: ['**/*.js', '!**/*.min.js', '!**/*.backup.js'],
            dest: '<%= globalConfig.dest %>/js/',
            cwd: '<%= globalConfig.src %>/unminified_js/',
            extDot: 'last',
            ext: '.min.js'

        }]
      }
    },

    // LESS FILE COMPILATION
    'less': {
      development: {
        options: {
          banner: '<%= banner %>'
        },
        files: {
          "<%= globalConfig.src %>/unminified_css/bootstrap.css": "<%= globalConfig.src %>/less/bootstrap.less",
          "<%= globalConfig.src %>/unminified_css/smartadmin-production.css": "<%= globalConfig.src %>/less/smartadmin-production.less",
          "<%= globalConfig.src %>/unminified_css/font-awesome.css": "<%= globalConfig.src %>/less/library/fontawesome/font-awesome.less",
          "<%= globalConfig.src %>/unminified_css/smartadmin-skins.css": "<%= globalConfig.src %>/less/smartadmin-skin/smartadmin-skins.less"
        }
      }
    },

    // MINIFY CSS
    'cssmin': {
      minify: {
        expand: true,
        src: ['*.css', '!*.min.css'],
        dest: '<%= globalConfig.dest %>/css/',
        cwd: '<%= globalConfig.src %>/unminified_css/',
        extDot: 'last',
        ext: '.min.css'
      }
    },

    // WATCH FILES FOR CHANGES
    watch: {
      files: ['<%= globalConfig.src %>/less/smartadmin/top-menu.less','<%= globalConfig.src %>/unminified_js/app.js', '<%= globalConfig.src %>/unminified_js/demo.js'],
      tasks: ['less','cssmin']
    }
  });

  //grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('dist-test', ['jshint']);
  grunt.registerTask('default', ['copy', 'uglify', 'less','cssmin']);
  grunt.registerTask('dist-less', ['less','cssmin']);
  grunt.registerTask('dist-js', ['uglify']);
  grunt.registerTask('dist-watch', ['watch']);


};
