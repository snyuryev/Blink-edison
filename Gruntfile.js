module.exports = function ( grunt ) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        scp: {
            options: {
                host: 'salty.local',
                username: 'root',
                password: '12345678'
            },
            salty: {
                files: [{
                    cwd: '',
                    src: ['app.js', 'requestHandlers.js', 'router.js', 'server.js', 'index.js', 'package.json'],
                    dest: '/home/root/blink/'
                }]
            },
        },
    });

    grunt.loadNpmTasks('grunt-scp');

    grunt.registerTask('default', ['scp']);
};




