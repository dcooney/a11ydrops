let methods = require("./methods");

/**
 * Set up each menu and create drop buttons.
 *
 * @param {HTMLElement} menu - Current menu element
 * @param {Array} options - The Plugin options
 */
let setupMenu = (menu, options) => {
	// Add class
	menu.classList.add("a11ydrops-drop");
	// Add aria-hidden
	menu.setAttribute("aria-hidden", true);

	// Create dropdown button
	let button = document.createElement("button");
	button.innerHTML = options.buttonText;

	let className = `${options.defaultButtonClass} ${options.buttonClasses}`;
	button.setAttribute("class", className);
	button.setAttribute("aria-expanded", false);

	// Click Event
	button.addEventListener("click", function(e) {
		methods.buttonClick(this, options);
	});

	// Keydown Event
	button.addEventListener("keydown", function(e) {
		methods.buttonKeydown(e, this, options);
	});

	// Get parent node
	let parent = menu.parentNode;

	// Add button to DOM before the menu
	parent.insertBefore(button, menu);
};
module.exports = setupMenu;
