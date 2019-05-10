/**
 * Filter results to only top level elements.
 *
 * @param {array} selectors - Matched element selectors
 * @param {object} options -The plugin options
 * @return results
 */
let filterSelectors = (selectors, options) => {
	let results = selectors.filter(s => {
		// Return nodes with a specific parent and child menu
		return s.parentNode === options.target && s.querySelector(options.menu);
	});
	return results;
};
module.exports = filterSelectors;
