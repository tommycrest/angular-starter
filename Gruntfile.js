/**
* Gruntfile.js : tasking for grunt builder
*/

module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
      js: {
        // Singolo entry point for our app.js
        src: 'app/scripts/app.js',
        // Compile to a single file to add a script tag for in your HTML
        dest: 'dist/scripts/app.js',
      },
    },
    copy: {
      all: {
        // This copies all the html and css into the dist/ folder
        expand: true,
        cwd: 'app/',
        src: ['**/*.html', '**/*.css'
             ],
        dest: 'dist/',
      },
    },
  });

  // Load the npm installed tasks
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // The default tasks to run when you type: grunt
  grunt.registerTask('default', ['browserify', 'copy']);
};