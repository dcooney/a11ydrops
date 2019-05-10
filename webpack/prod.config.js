const webpack = require('webpack');
const config = require('../webpack.config.js');

config.watch = false;
config.entry = {
	'a11ydrops.min': './src/a11ydrops.js'
};

config.plugins.push(
	new webpack.DefinePlugin({
		'process.env': {
			NODE_ENV: 'production'
		}
	})
);
module.exports = config;
