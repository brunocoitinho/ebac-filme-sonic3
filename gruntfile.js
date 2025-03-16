module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass:{
            dist: {
                options:{
                    style:'compressed'
                },
                files:{
                    'public/styles/main.css' : 'src/styles/main.scss'
                }
            },
            dev:{
                options:{
                    style:'expanded'
                },
                files:{
                    'public/styles/main.css' : 'src/styles/main.scss'
                }
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'src/img/',
                    src: ['**/*.{png,jpg,gif,jpeg}'],
                    dest: 'public/img'
                }]
            }
        },

        htmlmin:{
            dist:{
                options:{
                    removeComments: true,
                    collapseWhitespace: true
                },
                files:{
                    'public/index.html': 'src/index.html'
                }
            }
        },

        uglify:{
            target:{
                files:{
                    'public/scripts/main.js' : 'src/scripts/main.js'
                }
            }
        },

        watch:{
            sass:{
                files: ['src/styles/**/*.scss'],
                tasks: ['sass:dev']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin')
    grunt.loadNpmTasks('grunt-contrib-uglify')

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['htmlmin:dist', 'sass:dist', 'imagemin', 'uglify']);
};
