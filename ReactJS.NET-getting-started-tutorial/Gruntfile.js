module.exports = function (grunt) {
	grunt.initConfig({
		requirejs: {
			build: {
				options: {
					baseUrl: './Scripts',
					dir: './BuildAssets',
					keepBuildDir: false,
					fileExclusionRegExp: [
						'^requirejs$'
					].join('|'),
					optimize: 'uglify2',
					uglify2: {
						compress: {
							'global_defs': {
								DEBUG: false
							}
						}
					},
					removeCombined: true,
					useStrict: true,
					preserveLicenseComments: false,
					throwWhen: {
						optimize: true
					},
					generateSourceMaps: true,
					//shim: {},
					//map: {},
					paths: {
						react: '../bower_components/react/react-with-addons',
						JSXTransformer: '../bower_components/react/JSXTransformer',
						jsx: '../bower_components/jsx-requirejs-plugin/js/jsx',
						text: '../bower_components/requirejs-text/text',
						main: 'main',
						Comment: 'Comment',
						CommentList: 'CommentList',
						CommentForm: 'CommentForm',
						CommentBox: 'CommentBox'
					},
					modules: [{
						name: 'main',
						include: ['jsx!CommentBox']
					}],
					stubModules: ['jsx', 'text', 'JSXTransformer'],
					jsx: {
						fileExtension: '.jsx'
					}
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.registerTask('default', ['requirejs']);
};