module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'resources/dist/',
                    src: ['*.css'],
                    dest: 'resources/dist/',
                    ext: '.min.css'
                }]
            }
        },
        concat: {

            dist: {
                src: ['resources/css/*.css'],
                dest: 'resources/dist/style.css',
            },
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: [{
                    expand: true,
                    cwd: 'resources/sass/',
                    src: ['style.scss'],
                    dest: 'resources/css/',
                    ext: '.css'
                }]
            }
        },
        ts: {
            default: {
                src: ["resources/ts/*.ts"],
                dest: ['resources/js/script.js']
            }

        }
    });
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['sass', 'concat', 'cssmin', 'ts']);

};