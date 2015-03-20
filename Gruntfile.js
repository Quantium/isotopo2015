module.exports = function(grunt) {
    require('time-grunt')(grunt);
    var banner = '<%= pkg.name %>. Version <%= pkg.version %> <%= grunt.template.today("dd-mm-yyyy") %>';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
          build:{
              files: [
                {
                  expand:true,
                  cwd:'src',
                  src:[
                    'fonts/**.**',
                    'fonts/ecoicons/**.**',
                    'font-awesome/fonts/**.**',
                    'font-awesome/css/**.**',
                    'js/plugins/**.js'
                  ],
                  dest:'public'
                }
              ]
          }
        },
        clean: {
            build: {
                src: ['public']
            }
        },
        jshint: {
            options: {
                "-W030":true,
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            },
            express:{
                options:{globals:{jQuery:false}},
                files:{dev:['app.js','routes/{,*/}*.js']}
            },
            beforeconcat:{
                files:{dev:['Gruntfile.js','src/js/**.js']}
            },
            afterconcat:{
                files:{public:['public/js/custom.js]']}
            }
        },
        uglify: {
            options: {
                banner: '/* '+banner+' */\n'
            },
            dist: {
                files: {
                    'public/js/custom.js': ['src/js/custom.js']
                }
            }
        },
        cssmin: {
            dev: {
                options: {
                    banner: '/* '+banner+' */\n'
                },
                expand: true,
                cwd: 'src',
                src: ['css/**/**.css','css/**.min.css', 'css/**.css','css/**.min.css','color/**.css'],
                dest: 'public',
                ext: '.css'
            }
        },
        imagemin: {
            dev: {
                files: [{
                    expand: true,
                    cwd: 'src/img',
                    src: ['**.{png,jpg,gif}','**/**.{png,jpg,gif}'],
                    dest: 'public/img'
                }]
            }
        },
        'http-server': {
            plato: {
                root: "report/",
                port: 8282,
                host: "localhost",
                cache: 120,
                showDir : true,
                autoIndex: true,
                defaultExt: "html",
                runInBackground: false
            }
        }
    });



    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-includes');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-plato');
    grunt.loadNpmTasks('grunt-http-server');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');


    /*
     grunt.registerTask('default', ['less:dev','jshint:beforeconcat','includes', 'concat:dev','jshint:afterconcat','http-server:dev']);
     grunt.registerTask('qtest', ['jshint:tests','connect:test','mocha']);
     grunt.registerTask('test', ['default','qtest']);
     grunt.registerTask('publish', ['less:prod', 'jshint:beforeconcat', 'includes','concat:dev','uglify','jshint:afterconcat','htmlmin:prod']);

     grunt.registerTask('dev', ['less:dev', 'includes', 'concat:dev','ftp-deploy']);
     */
    grunt.registerTask('default', function( ){
        grunt.log.writeln('Para genera la aplicación de MAPA, utiliza:');
        grunt.log.writeln('\tgrunt dev      #Para desarrollo.');
        grunt.log.writeln('\tgrunt report   #Para revisar plato en http://localhost:8282');
    });
    grunt.registerTask('dev', [

        'jshint:express',
        'jshint:beforeconcat',
        'clean:build',
        'copy:build',
        'uglify:dist',
        'jshint:afterconcat',
        'cssmin:dev',
        'imagemin:dev'

    ]);

    grunt.registerTask('report', ['default','plato','http-server:plato']);





};
