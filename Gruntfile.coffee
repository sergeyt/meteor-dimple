module.exports = (grunt) ->

  # Project configuration.
	grunt.initConfig
		pkgFile: 'package.json'

		'npm-contributors':
			options:
				commitMessage: 'chore: update contributors'

		bump:
			options:
				commitMessage: 'chore: release v%VERSION%'
				pushTo: 'origin'

	grunt.loadNpmTasks 'grunt-npm'
	grunt.loadNpmTasks 'grunt-bump'

	grunt.registerTask 'release', 'Bump the version.',
		(type) -> grunt.task.run [
			'npm-contributors',
			"bump:#{type||'patch'}"
		]

