(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["a11ydrops"] = factory();
	else
		root["a11ydrops"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/a11ydrops.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/a11ydrops.js":
/*!**************************!*\
  !*** ./src/a11ydrops.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.init = init;\nvar defaults = __webpack_require__(/*! ./modules/defaults */ \"./src/modules/defaults.js\");\nvar getSelectors = __webpack_require__(/*! ./modules/getSelectors */ \"./src/modules/getSelectors.js\");\nvar filterSelectors = __webpack_require__(/*! ./modules/filterSelectors */ \"./src/modules/filterSelectors.js\");\nvar setUpSelector = __webpack_require__(/*! ./modules/setUpSelector */ \"./src/modules/setUpSelector.js\");\nvar setupMenu = __webpack_require__(/*! ./modules/setupMenu */ \"./src/modules/setupMenu.js\");\nvar methods = __webpack_require__(/*! ./modules/methods */ \"./src/modules/methods.js\");\n__webpack_require__(/*! ./modules/polyfills */ \"./src/modules/polyfills.js\");\n\n/**\n * a11ydrops provides accessibility support for navigational drop menus\n * @param {*} target\n * @param {*} options\n */\nfunction init(target, options) {\n\t// Assign options\n\toptions = Object.assign({}, defaults, options);\n\toptions.target = target;\n\toptions.selector = options.selector ? options.selector : \"li\";\n\toptions.buttonText = options.buttonText ? options.buttonText : \"\";\n\toptions.buttonClasses = options.buttonClasses ? options.buttonClasses : \"\";\n\toptions.activeClass = options.activeClass ? options.activeClass : \"\";\n\n\t/*\n  * Exit if target not set\n  */\n\tif (!options.target || !options.menu) return false;\n\n\t/*\n  * Add `a11ydrops` class to target\n  */\n\toptions.target.classList.add(\"a11ydrops\");\n\n\t/*\n  * Set up menus.\n  */\n\n\tif (options.menu) {\n\t\t// Get all drop menus\n\t\tvar dropMenus = getSelectors(options.target, options.menu);\n\n\t\t// Loop all menus to add event listeners and required attributes\n\t\tdropMenus.forEach(function (menu) {\n\t\t\tsetupMenu(menu, options);\n\t\t});\n\t}\n\n\t/*\n  * Set up selectors.\n  */\n\n\t// Get all selector elements\n\tvar selectors = filterSelectors(getSelectors(options.target, options.selector), options);\n\n\t// Loop all selectors to add event listeners and required attributes\n\tselectors.forEach(function (selector) {\n\t\tsetUpSelector(selector, options);\n\t});\n\t/*\n  * Add escape listener to the window.\n  */\n\twindow.addEventListener(\"keydown\", function (e) {\n\t\tmethods.windowKeydown(e, options);\n\t});\n\n\t/*\n  * Detect all clicks on the document.\n  */\n\tdocument.addEventListener(\"click\", function (e) {\n\t\tmethods.clickOutside(e, options);\n\t});\n}\n\n//# sourceURL=webpack://a11ydrops/./src/a11ydrops.js?");

/***/ }),

/***/ "./src/modules/defaults.js":
/*!*********************************!*\
  !*** ./src/modules/defaults.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {\n\tselector: \"li\",\n\tmenu: \".sub-menu\",\n\tbuttonText: \"Toggle Menu\",\n\tdefaultButtonClass: \"a11ydrops-btn\",\n\tbuttonClasses: \"\",\n\tactiveClass: \"active\",\n\thover: false\n};\n\n//# sourceURL=webpack://a11ydrops/./src/modules/defaults.js?");

/***/ }),

/***/ "./src/modules/filterSelectors.js":
/*!****************************************!*\
  !*** ./src/modules/filterSelectors.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Filter results to only top level elements.\n *\n * @param {array} selectors - Matched element selectors\n * @param {object} options -The plugin options\n * @return results\n */\nvar filterSelectors = function filterSelectors(selectors, options) {\n  var results = selectors.filter(function (s) {\n    // Return nodes with a specific parent and child menu\n    return s.parentNode === options.target && s.querySelector(options.menu);\n  });\n  return results;\n};\nmodule.exports = filterSelectors;\n\n//# sourceURL=webpack://a11ydrops/./src/modules/filterSelectors.js?");

/***/ }),

/***/ "./src/modules/getSelectors.js":
/*!*************************************!*\
  !*** ./src/modules/getSelectors.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar toArray = __webpack_require__(/*! ./toArray */ \"./src/modules/toArray.js\");\n\n/**\n * Return selectors as an array\n * @param {*} target\n * @param {*} match\n */\n\nvar getSelectors = function getSelectors(target, match) {\n  return toArray(target.querySelectorAll(match));\n};\nmodule.exports = getSelectors;\n\n//# sourceURL=webpack://a11ydrops/./src/modules/getSelectors.js?");

/***/ }),

/***/ "./src/modules/keycodes.js":
/*!*********************************!*\
  !*** ./src/modules/keycodes.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {\n\tup: 38,\n\tright: 39,\n\tdown: 40,\n\tleft: 37,\n\tescape: 27,\n\tenter: 13,\n\tspacebar: 32,\n\ttab: 9\n};\n\n//# sourceURL=webpack://a11ydrops/./src/modules/keycodes.js?");

/***/ }),

/***/ "./src/modules/methods.js":
/*!********************************!*\
  !*** ./src/modules/methods.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar getSelectors = __webpack_require__(/*! ./getSelectors */ \"./src/modules/getSelectors.js\");\nvar filterSelectors = __webpack_require__(/*! ./filterSelectors */ \"./src/modules/filterSelectors.js\");\nvar keycodes = __webpack_require__(/*! ./keycodes */ \"./src/modules/keycodes.js\");\nvar toArray = __webpack_require__(/*! ./toArray */ \"./src/modules/toArray.js\");\n\nvar methods = {\n\t/**\n  * Toggle the active menu state on button click.\n  *\n  * @param {HTMLElement} e - The current target element\n  * @param {Object} options\t- The plugin options\n  */\n\tbuttonClick: function buttonClick(e, options) {\n\t\tvar button = e;\n\t\tvar menu = button.parentNode.querySelector(options.menu);\n\t\tif (!menu) {\n\t\t\treturn false;\n\t\t}\n\t\tif (menu.classList.contains(options.activeClass)) {\n\t\t\tthis.close(button, menu, options);\n\t\t} else {\n\t\t\tthis.open(button, menu, options);\n\t\t}\n\t},\n\n\t/**\n  * Listen for button Tab + Shift keypress on drop menu button\n  *\n  * @param {HTMLElement} e - The current target element\n  * @param {Object} options\t- The plugin options\n  */\n\tbuttonKeydown: function buttonKeydown(e, button, options) {\n\t\tvar menu = button.parentNode.querySelector(options.menu);\n\t\tvar keyCode = e.keyCode || e.which;\n\t\tif (e.shiftKey && keyCode == keycodes.tab) {\n\t\t\tif (menu.classList.contains(options.activeClass)) {\n\t\t\t\tthis.close(button, menu, options);\n\t\t\t}\n\t\t}\n\t},\n\n\t/**\n  * Window listener for escape keypress.\n  *\n  * @param {HTMLElement} e - The current target element\n  * @param {Object} options\t- The plugin options\n  */\n\twindowKeydown: function windowKeydown(e, options) {\n\t\tvar _this = this;\n\n\t\te = e || window.event;\n\t\tvar isEscape = false;\n\t\tif (\"key\" in e) {\n\t\t\tisEscape = e.key == \"Escape\" || e.key == \"Esc\";\n\t\t} else {\n\t\t\tisEscape = e.keyCode == 27;\n\t\t}\n\n\t\tif (isEscape) {\n\t\t\t// Get all selector elements\n\t\t\tvar selectors = getSelectors(options.target, options.selector);\n\n\t\t\t// Filter selectors to only top level elements\n\t\t\tvar links = filterSelectors(selectors, options);\n\n\t\t\t// Loop all links and close open menus\n\t\t\tlinks.forEach(function (link) {\n\t\t\t\tvar button = link.querySelector(\".\" + options.defaultButtonClass);\n\t\t\t\tvar menu = link.querySelector(options.menu);\n\t\t\t\tif (menu && menu.classList.contains(options.activeClass)) {\n\t\t\t\t\t_this.close(button, menu, options);\n\t\t\t\t}\n\t\t\t});\n\t\t}\n\t},\n\n\t/**\n  * Opens a drop menu.\n  *\n  * @param {HTMLElement} button - The drop menu button\n  * @param {HTMLElement} menu - The drop menu\n  * @param {Object} options\t- The plugin options\n  */\n\topen: function open(button, menu, options) {\n\t\tif (!button || !menu) {\n\t\t\treturn false;\n\t\t}\n\t\tbutton.classList.add(options.activeClass);\n\t\tbutton.setAttribute(\"aria-expanded\", true);\n\t\tmenu.classList.add(options.activeClass);\n\t\tmenu.setAttribute(\"aria-hidden\", false);\n\t},\n\n\t/**\n  * Closes a drop menu.\n  *\n  * @param {HTMLElement} button - The drop menu button\n  * @param {HTMLElement} menu - The drop menu\n  * @param {Object} options\t- The plugin options\n  */\n\tclose: function close(button, menu, options) {\n\t\tif (!button || !menu) {\n\t\t\treturn false;\n\t\t}\n\t\tbutton.classList.remove(options.activeClass);\n\t\tbutton.setAttribute(\"aria-expanded\", false);\n\t\tmenu.classList.remove(options.activeClass);\n\t\tmenu.setAttribute(\"aria-hidden\", true);\n\t},\n\n\t/**\n  * On mouseover current top level navigation element.\n  *\n  * @param {HTMLElement} e - The current target element\n  * @param {Object} options\t- The plugin options\n  */\n\tmouseenter: function mouseenter(e, options) {\n\t\tvar target = e.target;\n\t\tvar menu = target.querySelector(options.menu);\n\t\tvar button = target.querySelector(\".\" + options.defaultButtonClass);\n\t\tif (!menu) {\n\t\t\treturn false;\n\t\t}\n\t\tmenu.classList.add(options.activeClass);\n\t\tmenu.setAttribute(\"aria-hidden\", false);\n\n\t\tif (!button) {\n\t\t\treturn false;\n\t\t}\n\t\tbutton.setAttribute(\"aria-expanded\", true);\n\t},\n\n\t/**\n  * On mouseout of current element.\n  *\n  * @param {HTMLElement} e - The current target element\n  * @param {Object} options\t- The plugin options\n  */\n\tmouseleave: function mouseleave(e, options) {\n\t\tvar target = e.target;\n\t\tvar menu = target.querySelector(options.menu);\n\t\tvar button = target.querySelector(\".\" + options.defaultButtonClass);\n\t\tif (!menu) {\n\t\t\treturn false;\n\t\t}\n\t\tmenu.classList.remove(options.activeClass);\n\t\tmenu.setAttribute(\"aria-hidden\", true);\n\t\tif (!button) {\n\t\t\treturn false;\n\t\t}\n\t\tbutton.setAttribute(\"aria-expanded\", false);\n\t},\n\n\t/**\n  * Focus leaves the current drop menu.\n  *\n  * @param {HTMLElement} e - The current target element\n  * @param {element} target - The parent link element\n  * @param {element} option- The plugin options\n  */\n\ttabOut: function tabOut(e, target, options) {\n\t\tvar menu = target.querySelector(options.menu);\n\t\tvar button = target.querySelector(\".\" + options.defaultButtonClass);\n\t\tvar keyCode = e.keyCode || e.which;\n\t\t// Tabbing fwd only\n\t\tif (!e.shiftKey && keyCode == keycodes.tab) {\n\t\t\t// If tab key\n\t\t\tif (menu && menu.classList.contains(options.activeClass)) {\n\t\t\t\tthis.close(button, menu, options);\n\t\t\t}\n\t\t}\n\t},\n\n\t/**\n  * Document click event to determine if menus should be closed\n  *\n  * @param {*} e - Clicked element\n  * @param {element} option- The plugin options\n  */\n\tclickOutside: function clickOutside(e, options) {\n\t\tvar _this2 = this;\n\n\t\tvar menus = toArray(options.target.querySelectorAll(\".a11ydrops-drop\"));\n\t\tif (menus) {\n\t\t\tmenus.forEach(function (menu) {\n\t\t\t\tvar clickedInside = menu.parentNode.contains(e.target);\n\t\t\t\tif (menu.classList.contains(options.activeClass) && !clickedInside) {\n\t\t\t\t\tvar parent = menu.parentNode;\n\t\t\t\t\tvar button = parent.querySelector(\".\" + options.defaultButtonClass);\n\t\t\t\t\tif (button) {\n\t\t\t\t\t\t_this2.close(button, menu, options);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t});\n\t\t}\n\t}\n};\nmodule.exports = methods;\n\n//# sourceURL=webpack://a11ydrops/./src/modules/methods.js?");

/***/ }),

/***/ "./src/modules/polyfills.js":
/*!**********************************!*\
  !*** ./src/modules/polyfills.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// Object Assign\nif (typeof Object.assign != \"function\") {\n\t// Must be writable: true, enumerable: false, configurable: true\n\tObject.defineProperty(Object, \"assign\", {\n\t\tvalue: function assign(target, varArgs) {\n\t\t\t// .length of function is 2\n\t\t\t\"use strict\";\n\n\t\t\tif (target == null) {\n\t\t\t\t// TypeError if undefined or null\n\t\t\t\tthrow new TypeError(\"Cannot convert undefined or null to object\");\n\t\t\t}\n\n\t\t\tvar to = Object(target);\n\n\t\t\tfor (var index = 1; index < arguments.length; index++) {\n\t\t\t\tvar nextSource = arguments[index];\n\n\t\t\t\tif (nextSource != null) {\n\t\t\t\t\t// Skip over if undefined or null\n\t\t\t\t\tfor (var nextKey in nextSource) {\n\t\t\t\t\t\t// Avoid bugs when hasOwnProperty is shadowed\n\t\t\t\t\t\tif (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {\n\t\t\t\t\t\t\tto[nextKey] = nextSource[nextKey];\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn to;\n\t\t},\n\t\twritable: true,\n\t\tconfigurable: true\n\t});\n}\n\n// Production steps of ECMA-262, Edition 5, 15.4.4.18\n// Reference: http://es5.github.io/#x15.4.4.18\nif (!Array.prototype.forEach) {\n\tArray.prototype.forEach = function (callback /*, thisArg*/) {\n\t\tvar T, k;\n\t\tif (this == null) {\n\t\t\tthrow new TypeError(\"this is null or not defined\");\n\t\t}\n\n\t\t// 1. Let O be the result of calling toObject() passing the\n\t\t// |this| value as the argument.\n\t\tvar O = Object(this);\n\n\t\t// 2. Let lenValue be the result of calling the Get() internal\n\t\t// method of O with the argument \"length\".\n\t\t// 3. Let len be toUint32(lenValue).\n\t\tvar len = O.length >>> 0;\n\n\t\t// 4. If isCallable(callback) is false, throw a TypeError exception.\n\t\t// See: http://es5.github.com/#x9.11\n\t\tif (typeof callback !== \"function\") {\n\t\t\tthrow new TypeError(callback + \" is not a function\");\n\t\t}\n\n\t\t// 5. If thisArg was supplied, let T be thisArg; else let\n\t\t// T be undefined.\n\t\tif (arguments.length > 1) {\n\t\t\tT = arguments[1];\n\t\t}\n\n\t\t// 6. Let k be 0.\n\t\tk = 0;\n\n\t\t// 7. Repeat while k < len.\n\t\twhile (k < len) {\n\t\t\tvar kValue;\n\n\t\t\t// a. Let Pk be ToString(k).\n\t\t\t//    This is implicit for LHS operands of the in operator.\n\t\t\t// b. Let kPresent be the result of calling the HasProperty\n\t\t\t//    internal method of O with argument Pk.\n\t\t\t//    This step can be combined with c.\n\t\t\t// c. If kPresent is true, then\n\t\t\tif (k in O) {\n\t\t\t\t// i. Let kValue be the result of calling the Get internal\n\t\t\t\t// method of O with argument Pk.\n\t\t\t\tkValue = O[k];\n\n\t\t\t\t// ii. Call the Call internal method of callback with T as\n\t\t\t\t// the this value and argument list containing kValue, k, and O.\n\t\t\t\tcallback.call(T, kValue, k, O);\n\t\t\t}\n\t\t\t// d. Increase k by 1.\n\t\t\tk++;\n\t\t}\n\t\t// 8. return undefined.\n\t};\n}\n\n//# sourceURL=webpack://a11ydrops/./src/modules/polyfills.js?");

/***/ }),

/***/ "./src/modules/setUpSelector.js":
/*!**************************************!*\
  !*** ./src/modules/setUpSelector.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar methods = __webpack_require__(/*! ./methods */ \"./src/modules/methods.js\");\nvar getSelectors = __webpack_require__(/*! ./getSelectors */ \"./src/modules/getSelectors.js\");\n\n/**\n * Set up each menu and create drop buttons.\n *\n * @param {HTMLElement} selector - Current menu selector element\n * @param {Array} options - The Plugin options\n */\nvar setUpSelector = function setUpSelector(selector, options) {\n\t// Add mouseeneter and mouseleave enter events when hover is enabled\n\tif (options.hover) {\n\t\tselector.addEventListener(\"mouseenter\", function (e) {\n\t\t\tmethods.mouseenter(e, options);\n\t\t});\n\n\t\tselector.addEventListener(\"mouseleave\", function (e) {\n\t\t\tmethods.mouseleave(e, options);\n\t\t});\n\t}\n\n\t// Get all child elements that can be focused\n\n\t// Array of focusable elements\n\tvar focusable = 'button, [href], input, select, textarea, [tabindex]:not([tabindex=\"-1\"])';\n\n\t// Get current target\n\tvar target = selector.querySelector(options.menu);\n\n\t// Get all focusable elements\n\tvar focusElements = getSelectors(target, focusable);\n\tif (focusElements.length > 0) {\n\t\t// Get last focusable element\n\t\tvar lastFocus = focusElements[focusElements.length - 1];\n\t\tif (lastFocus) {\n\t\t\t// Append eventListener to last item\n\t\t\tlastFocus.addEventListener(\"keydown\", function (e) {\n\t\t\t\tmethods.tabOut(e, selector, options);\n\t\t\t});\n\t\t}\n\t}\n};\nmodule.exports = setUpSelector;\n\n//# sourceURL=webpack://a11ydrops/./src/modules/setUpSelector.js?");

/***/ }),

/***/ "./src/modules/setupMenu.js":
/*!**********************************!*\
  !*** ./src/modules/setupMenu.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar methods = __webpack_require__(/*! ./methods */ \"./src/modules/methods.js\");\n\n/**\n * Set up each menu and create drop buttons.\n *\n * @param {HTMLElement} menu - Current menu element\n * @param {Array} options - The Plugin options\n */\nvar setupMenu = function setupMenu(menu, options) {\n\t// Add class\n\tmenu.classList.add(\"a11ydrops-drop\");\n\t// Add aria-hidden\n\tmenu.setAttribute(\"aria-hidden\", true);\n\n\t// Create dropdown button\n\tvar button = document.createElement(\"button\");\n\tbutton.innerHTML = options.buttonText;\n\n\tvar className = options.defaultButtonClass + \" \" + options.buttonClasses;\n\tbutton.setAttribute(\"class\", className);\n\tbutton.setAttribute(\"aria-expanded\", false);\n\n\t// Click Event\n\tbutton.addEventListener(\"click\", function (e) {\n\t\tmethods.buttonClick(this, options);\n\t});\n\n\t// Keydown Event\n\tbutton.addEventListener(\"keydown\", function (e) {\n\t\tmethods.buttonKeydown(e, this, options);\n\t});\n\n\t// Get parent node\n\tvar parent = menu.parentNode;\n\n\t// Add button to DOM before the menu\n\tparent.insertBefore(button, menu);\n};\nmodule.exports = setupMenu;\n\n//# sourceURL=webpack://a11ydrops/./src/modules/setupMenu.js?");

/***/ }),

/***/ "./src/modules/toArray.js":
/*!********************************!*\
  !*** ./src/modules/toArray.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Convert NodeList to array\n * @param {NodeList} nodeList\n */\nvar toArray = function toArray() {\n  var nodeList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n\n  if (nodeList) {\n    return Array.prototype.slice.call(nodeList);\n  }\n};\nmodule.exports = toArray;\n\n//# sourceURL=webpack://a11ydrops/./src/modules/toArray.js?");

/***/ })

/******/ });
});