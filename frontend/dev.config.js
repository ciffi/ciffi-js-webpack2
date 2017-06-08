var ConfigFile = require(__dirname + '/.ciffisettings');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var _indexUrl = 'http://' + ConfigFile.devStartUrl + '.local/';

module.exports = {
	entry: {
		main: './' + ConfigFile.srcPathName + '/scripts/main.js'
	},
	output: {
		path: __dirname + '/' + ConfigFile.assetsPath,
		filename: '[name].js'
	},
	devtool: 'eval',
	watch: true,
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
	},
	plugins: [
		new OpenBrowserPlugin({
			url: _indexUrl
		})
	]
};