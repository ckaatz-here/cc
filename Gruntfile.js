var grunt = require("grunt");
require("load-grunt-tasks")(grunt);
grunt.loadNpmTasks('grunt-babel');

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
    }
});

grunt.registerTask("default", ["babel"]);
grunt.registerTask("build", ["babel"]);