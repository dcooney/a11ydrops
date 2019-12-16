let methods = require("./methods");
let getSelectors = require("./getSelectors");

/**
 * Set up each menu and create drop buttons.
 *
 * @param {HTMLElement} selector - Current menu selector element
 * @param {Array} options - The Plugin options
 */
let setUpSelector = (selector, options) => {
	// Add mouseeneter and mouseleave enter events when hover is enabled
	if (options.hover) {
		selector.addEventListener("mouseenter", function (e) {
			if (window.innerWidth > options.hover_width) {
				methods.mouseenter(e, options);
			}
		});

		selector.addEventListener("mouseleave", function (e) {
			if (window.innerWidth > options.hover_width) {
				methods.mouseleave(e, options);
			}
		});
	}

	// Get all child elements that can be focused

	// Array of focusable elements
	let focusable =
		'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

	// Get current target
	let target = selector.querySelector(options.menu);

	// Get all focusable elements
	let focusElements = getSelectors(target, focusable);
	if (focusElements.length > 0) {
		// Get last focusable element
		let lastFocus = focusElements[focusElements.length - 1];
		if (lastFocus) {
			// Append eventListener to last item
			lastFocus.addEventListener("keydown", function (e) {
				methods.tabOut(e, selector, options);
			});
		}
	}
};
module.exports = setUpSelector;
