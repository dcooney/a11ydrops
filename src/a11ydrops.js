let defaults = require("./modules/defaults");
let getSelectors = require("./modules/getSelectors");
let filterSelectors = require("./modules/filterSelectors");
let setUpSelector = require("./modules/setUpSelector");
let setupMenu = require("./modules/setupMenu");
let methods = require("./modules/methods");
require("./modules/polyfills");

/**
 * a11ydrops provides accessibility support for navigational drop menus
 * @param {*} target
 * @param {*} options
 */
let a11ydrops = (target, options) => {
	// Assign options
	options = Object.assign({}, defaults, options);
	options.target = target;
	options.selector = options.selector ? options.selector : "li";
	options.buttonText = options.buttonText ? options.buttonText : "";
	options.buttonClasses = options.buttonClasses ? options.buttonClasses : "";
	options.activeClass = options.activeClass ? options.activeClass : "";

	/*
	 * Exit if target not set
	 */
	if (!options.target || !options.menu) return false;

	/*
	 * Add `a11ydrops` class to target
	 */
	options.target.classList.add("a11ydrops");

	/*
	 * Set up menus.
	 */

	if (options.menu) {
		// Get all drop menus
		let dropMenus = getSelectors(options.target, options.menu);

		// Loop all menus to add event listeners and required attributes
		dropMenus.forEach(menu => {
			setupMenu(menu, options);
		});
	}

	/*
	 * Set up selectors.
	 */

	// Get all selector elements
	let selectors = filterSelectors(
		getSelectors(options.target, options.selector),
		options
	);

	// Loop all selectors to add event listeners and required attributes
	selectors.forEach(selector => {
		setUpSelector(selector, options);
	});
	/*
	 * Add escape listener to the window.
	 */
	window.addEventListener("keydown", function(e) {
		methods.windowKeydown(e, options);
	});

	/*
	 * Detect all clicks on the document.
	 */
	document.addEventListener("click", function(e) {
		methods.clickOutside(e, options);
	});
};
module.exports = a11ydrops;
