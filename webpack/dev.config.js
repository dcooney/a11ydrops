const webpack = require('webpack');
const config = require('../webpack.config.js');

config.watch = true;

config.plugins.push(
	new webpack.DefinePlugin({
		'process.env': {
			NODE_ENV: '"development"'
		}
	})
);
module.exports = config;
