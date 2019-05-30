var path = require("path");
var dir = "dist";
var name = "a11ydrops";
module.exports = {
	entry: {
		a11ydrops: "./src/a11ydrops.js"
	},
	output: {
		path: path.join(__dirname, dir),
		filename: "[name].js",
		library: name,
		libraryTarget: "umd"
	},
	module: {
		rules: [
			{
				test: /.jsx?$/,
				loader: "babel-loader",
				exclude: /node_modules/,
				query: {
					presets: ["env"]
				}
			}
		]
	},
	plugins: []
};
