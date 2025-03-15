module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass:{
            dist: {
                options:{
                    style:'compressed'
                },
                files:{
                    'dist/styles/main.css' : 'src/styles/main.scss'
                }
            },
            dev:{
                options:{
                    style:'expanded'
                },
                files:{
                    'dist/styles/main.css' : 'src/styles/main.scss'
                }
            }

        },


        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'src/img/',
                    src: ['**/*.{png,jpg,gif,jpeg}'],
                    dest: 'dist/img'
                }]
            }
        },

        watch:{
            sass:{
                files: ['src/styles/**/*.scss'],
                tasks: ['sass:dev']
            },
        }
    })


    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-imagemin');



    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['sass:dist', 'imagemin'])
}