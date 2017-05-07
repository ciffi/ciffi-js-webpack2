/*
 *
 * replace _indexUrl variable with your development index page
 *
 * */
var _indexUrl = 'http://@REPLACE__CONFIG@.local/';

var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
	entry: {
		main: './@REPLACE__ASSETS__NAME@/scripts/main.js'
	},
	output: {
		path: '@REPLACE__ASSETS@',
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
				exclude: './node_modules',
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