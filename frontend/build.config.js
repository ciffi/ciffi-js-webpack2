var ConfigFile = require(__dirname + '/.ciffisettings');

module.exports = {
	entry: {
		main: './' + ConfigFile.srcPathName + '/scripts/main.js'
	},
	output: {
		path: __dirname + '/' + ConfigFile.assetsPath,
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				enforce: 'pre',
				loader: 'eslint-loader',
				exclude: __dirname + '/' + './node_modules',
				options: {
					configFile: './.eslintrc'
				}
			},
			{
				test: /\.twig$/,
				loader: 'twig-loader'
			}
		]
	}
};