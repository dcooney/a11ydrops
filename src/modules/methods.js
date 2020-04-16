let getSelectors = require("./getSelectors");
let filterSelectors = require("./filterSelectors");
let keycodes = require("./keycodes");
let toArray = require("./toArray");

let methods = {
	/**
	 * Toggle the active menu state on button click.
	 *
	 * @param {HTMLElement} e - The current target element
	 * @param {Object} options	- The plugin options
	 */
	buttonClick: function (e, options) {
		let button = e;
		let menu = button.parentNode.querySelector(options.menu);
		if (!menu) {
			return false;
		}
		if (menu.classList.contains(options.activeClass)) {
			this.close(button, menu, options);
		} else {
			this.open(button, menu, options);
		}
	},

	/**
	 * Listen for button Tab + Shift keypress on drop menu button
	 *
	 * @param {HTMLElement} e - The current target element
	 * @param {Object} options	- The plugin options
	 */
	buttonKeydown: function (e, button, options) {
		let menu = button.parentNode.querySelector(options.menu);
		let keyCode = e.keyCode || e.which;
		if (e.shiftKey && keyCode == keycodes.tab) {
			if (menu.classList.contains(options.activeClass)) {
				this.close(button, menu, options);
			}
		}
	},

	/**
	 * Window listener for escape keypress.
	 *
	 * @param {HTMLElement} e - The current target element
	 * @param {Object} options	- The plugin options
	 */
	windowKeydown: function (e, options) {
		e = e || window.event;
		var isEscape = false;
		if ("key" in e) {
			isEscape = e.key == "Escape" || e.key == "Esc";
		} else {
			isEscape = e.keyCode == 27;
		}

		if (isEscape) {
			// Get all selector elements
			let selectors = getSelectors(options.target, options.selector);

			// Filter selectors to only top level elements
			let links = filterSelectors(selectors, options);

			// Loop all links and close open menus
			links.forEach((link) => {
				let button = link.querySelector(`.${options.defaultButtonClass}`);
				let menu = link.querySelector(options.menu);
				if (menu && menu.classList.contains(options.activeClass)) {
					this.close(button, menu, options);
					button.focus();
				}
			});
		}
	},

	/**
	 * Opens a drop menu.
	 *
	 * @param {HTMLElement} button - The drop menu button
	 * @param {HTMLElement} menu - The drop menu
	 * @param {Object} options	- The plugin options
	 */
	open: function (button, menu, options) {
		if (!button || !menu) {
			return false;
		}
		button.classList.add(options.activeClass);
		button.setAttribute("aria-expanded", true);
		menu.classList.add(options.activeClass);
		menu.setAttribute("aria-hidden", false);
	},

	/**
	 * Closes a drop menu.
	 *
	 * @param {HTMLElement} button - The drop menu button
	 * @param {HTMLElement} menu - The drop menu
	 * @param {Object} options	- The plugin options
	 */
	close: function (button, menu, options) {
		if (!button || !menu) {
			return false;
		}
		button.classList.remove(options.activeClass);
		button.setAttribute("aria-expanded", false);
		menu.classList.remove(options.activeClass);
		menu.setAttribute("aria-hidden", true);
	},

	/**
	 * On mouseover current top level navigation element.
	 *
	 * @param {HTMLElement} e - The current target element
	 * @param {Object} options	- The plugin options
	 */
	mouseenter: function (e, options) {
		let target = e.target;
		let menu = target.querySelector(options.menu);
		let button = target.querySelector(`.${options.defaultButtonClass}`);
		if (!menu) {
			return false;
		}
		menu.classList.add(options.activeClass);
		menu.setAttribute("aria-hidden", false);

		if (!button) {
			return false;
		}
		button.setAttribute("aria-expanded", true);
	},

	/**
	 * On mouseout of current element.
	 *
	 * @param {HTMLElement} e - The current target element
	 * @param {Object} options	- The plugin options
	 */
	mouseleave: function (e, options) {
		let target = e.target;
		let menu = target.querySelector(options.menu);
		let button = target.querySelector(`.${options.defaultButtonClass}`);
		if (!menu) {
			return false;
		}
		menu.classList.remove(options.activeClass);
		menu.setAttribute("aria-hidden", true);
		if (!button) {
			return false;
		}
		button.setAttribute("aria-expanded", false);
	},

	/**
	 * Focus leaves the current drop menu.
	 *
	 * @param {HTMLElement} e - The current target element
	 * @param {element} target - The parent link element
	 * @param {element} option- The plugin options
	 */
	tabOut: function (e, target, options) {
		let menu = target.querySelector(options.menu);
		let button = target.querySelector(`.${options.defaultButtonClass}`);
		let keyCode = e.keyCode || e.which;
		// Tabbing fwd only
		if (!e.shiftKey && keyCode == keycodes.tab) {
			// If tab key
			if (menu && menu.classList.contains(options.activeClass)) {
				this.close(button, menu, options);
			}
		}
	},

	/**
	 * Document click event to determine if menus should be closed
	 *
	 * @param {*} e - Clicked element
	 * @param {element} option- The plugin options
	 */
	clickOutside: function (e, options) {
		let menus = toArray(options.target.querySelectorAll(".a11ydrops-drop"));
		if (menus) {
			menus.forEach((menu) => {
				let clickedInside = menu.parentNode.contains(e.target);
				if (
					menu.classList.contains(options.activeClass) &&
					!clickedInside
				) {
					let parent = menu.parentNode;
					let button = parent.querySelector(
						`.${options.defaultButtonClass}`
					);
					if (button) {
						this.close(button, menu, options);
					}
				}
			});
		}
	},
};
module.exports = methods;
