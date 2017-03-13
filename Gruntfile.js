'use strict';

var proxySnippet = require('grunt-connect-proxy/lib/utils').proxyRequest;

module.exports = function (grunt) {
    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);
    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);
    // Configurable paths for the application
    var appConfig = {
        app: 'source',
        dist: 'dist'
    };
    grunt.loadNpmTasks('grunt-war');
    grunt.loadNpmTasks('grunt-connect-proxy');
    grunt.loadNpmTasks('grunt-cssjoin');
    // Define the configuration for all the tasks
    grunt.initConfig({
        // Project settings
        config: appConfig,
        // Watches files for changes and runs tasks based on the changed files
        watch: {
            bower: {
                files: ['bower.json'],
                tasks: ['wiredep']
            },
            js: {
                files: ['<%= config.app %>/app/**/*.js'],
                tasks: ['newer:jshint:all'],
                options: { livereload: '<%= connect.options.livereload %>' }
            },
            jsTest: {
                files: ['test/spec/**/*.js'],
                tasks: [
                    'newer:jshint:test',
                    'karma'
                ]
            },
            styles: {
                files: ['<%= config.app %>/styles/{,*/}*.css'],
                tasks: [
                    'newer:copy:styles',
                    'autoprefixer'
                ]
            },
            gruntfile: { files: ['Gruntfile.js'] },
            livereload: {
                options: { livereload: '<%= connect.options.livereload %>' },
                files: [
                    '<%= config.app %>/**/*.html',
                    '.tmp/styles/{,*/}*.css',
                    '<%= config.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg,ico}'
                ]
            }
        },
        // The actual grunt server settings
        connect: {
            options: {
                port: 9000,
                hostname: 'localhost',
                livereload: 35729,
                base: '.'
            },
            proxies: [
                {
                    context: '/nda-ticket/api',
                    host: 'localhost',
                    port: 8080,
                    https: false,
                    changeOrigin: true
                }
            ],

            livereload: {
                options: {
                    open: true,
                    base: [
                        '.tmp',
                        '<%= config.app %>'
                    ],
                    middleware: function (connect) {
                        return [
                            connect.static('.tmp'),
                            connect().use(
                                '/bower_components',
                                connect.static('./bower_components')
                            ),
                            connect.static(appConfig.app),
                            proxySnippet
                        ];
                    }
                }
            },
            test: {
                options: {
                    port: 9001,
                    middleware: function (connect) {
                        return [
                            connect.static('.tmp'),
                            connect.static('test'),
                            connect().use(
                                '/bower_components',
                                connect.static('./bower_components')
                            ),
                            connect.static(config.app)
                        ];
                    }
                }
            },
            dist: {
                options: {
                    open: true,
                    base: '<%= config.dist %>'
                }
            }
        },

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                        dot: true,
                        src: [
                            '.tmp',
                            '<%= config.dist %>/{,*/}*',
                            '!<%= config.dist %>/.git*'
                        ]
                    }]
            },
            server: '.tmp'
        },
        // Add thirdParty prefixed styles
        autoprefixer: {
            options: { browsers: ['last 1 version'] },
            dist: {
                files: [
                    {
                        expand: true,
                        //cwd: '.tmp/styles/',
                        src: '.tmp/styles/{,*/}*.css',
                        dest: '.tmp/styles/'
                    }
                ]
            }
        },
        // Automatically inject Bower components into the app
        wiredep: {
            app: {
                src: ['<%= config.app %>/index.html'],
                exclude: [
                    '/bower_components/listComponentClient/dist/itlegal.listcomponent.min.js',
                    '/bower_components/listComponentClient/dist/itlegal.listcomponent.min.css',
                    '/bower_components/blueimp-file-upload/js/jquery.fileupload.js'
                ],
                ignorePath: '../'
            }
        },
        // Renames files for browser caching purposes
        filerev: {
            dist: {
                src: [
                    '<%= config.dist %>/app/**/*.js',
                    '<%= config.dist %>/styles/{,*/}*.css',
                    '<%= config.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },
        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            html: '<%= config.app %>/index.html',
            options: {
                dest: '<%= config.dist %>',
                flow: {
                    html: {
                        steps: {
                            js: [
                                'concat',
                                'uglifyjs'
                            ],
                            css: ['cssmin']
                        },
                        post: {}
                    }
                }
            }
        },
        // Performs rewrites based on filerev and the useminPrepare configuration
        usemin: {
            html: ['<%= config.dist %>/**/*.html'],
            css: ['<%= config.dist %>/styles/{,*/}*.css'],
            options: {
                assetsDirs: [
                    '<%= config.dist %>',
                    '<%= config.dist %>/images'
                ],
                patterns: {
                    js: [[
                            /(app\/.*?\.html)/gm,
                            'Update the JS to reference our revved html'
                        ]]
                }
            }
        },
        uglify: { options: { mangle: false } },
        concat: { dist: {} },
        imagemin: {
            dist: {
                files: [{
                        expand: true,
                        cwd: '<%= config.app %>/images',
                        src: ['**/*.{png,jpg,jpeg,gif,ico}'],
                        dest: '<%= config.dist %>/images'
                    }]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true,
                    conservativeCollapse: true,
                    collapseBooleanAttributes: true,
                    removeCommentsFromCDATA: true,
                    removeOptionalTags: true
                },
                files: [{
                        expand: true,
                        cwd: '<%= config.dist %>',
                        src: [
                            '*.html',
                            'app/**/*.html'
                        ],
                        dest: '<%= config.dist %>'
                    }]
            }
        },
        cssjoin: {
            bundles: {
                options: { paths: ['.tmp/styles/jQueryCss/'] },
                files: [{
                        expand: true,
                        cwd: '.tmp/styles/jQueryCss/',
                        dest: '<%= config.dist %>/styles/jquery-ui',
                        src: ['all.css']
                    }]
            }
        },
        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= config.app %>',
                        dest: '<%= config.dist %>',
                        src: [
                            '*.html',
                            'app/**/*.html'
                        ]
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/listComponentClient/dist',
                        dest: '<%= config.dist %>/bower_components/listComponentClient/dist/',
                        src: ['**']
                    },

                    {
                        expand: true,
                        cwd: 'bower_components/select2',
                        dest: '<%= config.dist %>/styles/bootstrap',
                        src: ['**/*.gif', '**/*.png']
                    }
                    ,
                    {
                        expand: true,
                        cwd: 'bower_components/angular-ui-grid',
                        dest: '<%= config.dist %>/styles/bootstrap',
                        src: ['**/*.ttf','**/*.woff']
                    }
                    ,
                    {
                        expand: true,
                        cwd: 'bower_components/bootstrap',
                        dest: '<%= config.dist %>/styles',
                        src: ['fonts/**']
                    }
                    ,
                    {
                        expand: true,
                        cwd: 'bower_components/jquery-ui/themes/base',
                        dest: '.tmp/styles/jQueryCss',
                        src: ['**/*.css']
                    }
                    ,
                    {
                        expand: true,
                        cwd: 'bower_components/font-awesome/css',
                        dest: '<%= config.dist %>/styles/font-awesome',
                        src: ['font-awesome.css']
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/font-awesome/fonts',
                        dest: '<%= config.dist %>/styles/fonts',
                        src: [
                            '**/*.otf',
                            '**/*.eot',
                            '**/*.svg',
                            '**/*.ttf',
                            '**/*.woff',
                            '**/*.woff2'
                        ]
                    },
                    {
                        expand: true,
                        cwd: '<%= config.app %>/images/jquery-ui',
                        dest: '<%= config.dist %>/styles/jquery-ui/images',
                        src: ['**/*.png']
                    },
                    {
                        expand: true,
                        cwd: '.tmp/images',
                        dest: '<%= config.dist %>/images',
                        src: ['generated/*']
                    },
                    {
                        expand: true,
                        cwd: '<%= config.app %>/WEB-INF',
                        dest: '<%= config.dist %>/WEB-INF',
                        src: ['web.xml']
                    }
                ]
            },
            styles: {
                expand: true,
                cwd: '<%= config.app %>/styles',
                dest: '<%= config.dist %>/styles/',
                src: '{,*/}*.css'
            }
        },
        // Run some tasks in parallel to speed up the build process
        concurrent: {
            server: ['copy:styles'],
            test: ['copy:styles'],
            dist: [
                'copy:styles',
                'imagemin'
            ]
        },
        // Test settings
        karma: {
            unit: {
                configFile: './test/karma.conf.js',
                singleRun: true
            }
        },
        war: {
            target: {
                options: {
                    war_dist_folder: '<%= config.dist %>',
                    war_verbose: true,
                    war_name: 'ui',
                    webxml_welcome: 'index.html',
                    webxml_display_name: 'NDA Ticketing',
                    webxml_mime_mapping: [{
                            extension: 'woff',
                            mime_type: 'application/font-woff'
                        }]
                },
                files: [{
                        expand: true,
                        cwd: '<%= config.dist %>',
                        src: ['**'],
                        dest: ''
                    }]
            }
        }
    });
    grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
        if (target === 'dist') {
            return grunt.task.run([
                'build',
                'connect:dist:keepalive'
            ]);
        }
        grunt.task.run([
            'clean:server',
            'wiredep',
            'concurrent:server',
            'autoprefixer',
            'configureProxies',
            'connect:livereload',
            'watch'
        ]);
    });
    grunt.registerTask('test', [
        'clean:server',
        'concurrent:test',
        'autoprefixer',
        //'connect:test',
        'karma:unit'
    ]);
    grunt.registerTask('build', [
        'clean:dist',
        'wiredep',
        'useminPrepare',
        'concurrent:dist',
        'autoprefixer',
        'concat',
        'copy:dist',
        'cssjoin',
        'cssmin',
        'uglify',
        'filerev',
        'usemin',
        'htmlmin',
        'karma:unit'
    ]);
    grunt.registerTask('bundle', [
        'build',
        'war:target'
    ]);
    grunt.registerTask('default', ['serve']);
};
