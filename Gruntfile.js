var grunt = require("grunt");
require("load-grunt-tasks")(grunt);
grunt.loadNpmTasks('grunt-babel');
grunt.loadNpmTasks('grunt-contrib-nodeunit');

grunt.initConfig({
    "babel": {
        options: {
            sourceMap: false
        },
        dist: {
            files: [{
                "expand": true,
                "cwd": "src/",
                "src": "**/*.js",
                "dest": "dist/",
                "ext": ".js"
            }]
        }
    },
    jshint: {
        allFiles: ['Gruntfile.js', 'src/**/*.js', 'util', 'test/*.js'],
        options: {
            jshintrc: '.jshintrc'
        }
    },
    nodeunit: {
        all: ['test/*.js']
    }
});

grunt.registerTask("default", ["babel"]);
grunt.registerTask("build", ["babel"]);
grunt.registerTask("test", ["jshint", "babel", "nodeunit"]);