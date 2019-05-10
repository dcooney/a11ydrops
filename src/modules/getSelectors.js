let toArray = require("./toArray");

/**
 * Return selectors as an array
 * @param {*} target
 * @param {*} match
 */

let getSelectors = (target, match) => {
	return toArray(target.querySelectorAll(match));
};
module.exports = getSelectors;
