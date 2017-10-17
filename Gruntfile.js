module.exports = function(grunt) {

    grunt.initConfig({

        // JS TASKS ================================================================
        jshint: {
            all: [
                'app/controllers/**/*.js'
            ],
            options: {
                force: true
            }
        },

        uglify: {
            options: {
                mangle: false
                    /*{
                    except: ['angular']
                }*/
            },
            build: {
                files: {
                    'dist/js/app.min.js': ['app/**/*.js']
                }
            }
        },

        // CSS TASKS ===============================================================
        cssmin: {
            build: {
                files: {
                    'dist/css/style.min.css': [
                        'app/assets/css/*.css'
                    ]
                }
            }
        },

        //COPY IMAGES TASK
        copy: {
            main: {
                files: [
                    {expand: true, cwd: 'app/assets/img/', src: ['**'], dest: 'dist/assets/img'}
                ]
            }
        },

        // COOL TASKS ==============================================================
        watch: {
            css: {
                files: ['app/**/*.css'],
                tasks: ['cssmin']
            },
            js: {
                files: ['app/**/*.js'],
                tasks: ['jshint', 'uglify']
            },
            images: {
                files: ['app/assets/img/**/*'],
                tasks: ['copy:main']
            }
        },

        nodemon: {
            dev: {
                script: 'server.js'
            }
        },

        concurrent: {
            options: {
                logConcurrentOutput: true
            },
            tasks: ['nodemon', 'watch']
        }

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-concurrent');

    grunt.registerTask('default', ['cssmin', 'jshint', 'uglify', 'concurrent']);

};