# a11ydrops

a11ydrops is a small (5kb) JavaScript library that ensures your dropdown menus are accessible via keyboard controls and screen readers - [view the examples](https://dcooney.github.io/a11ydrops/example/).

## What Does a11ydrops Do?

1. Creates a button to toggle the state (open/closed) of the drop menu.
2. Adds required `aria` attributes to link the toggle button and drop menu together.
3. Enables keyboard controls to tab seemlessly though drop menus and escape when needed.

**Note**: a11ydrops does not provide any CSS styling. It simply injects required functionality to make the dropdown menus accessibile for every user.

## Styling

With regards to CSS styling, a11ydrops is an unopinionated library and does not provide any out-of-the-box CSS. It will be up to you to provide the necessary CSS for styling the dropdown menu's and buttons.

When a dropdown menu becomes active (or visible) an `.active` class is added to the menu and button.

**Note**: The `.active` classname is configurable via a11ydrops [`options`](#config-options).

## Install

a11ydrops can be installed via [NPM](https://www.npmjs.com/package/a11ydrops):

`$ npm install a11ydrops --save`

or by direct script include:

`<script src="{path_to_scripts}/a11ydrops.js">`

## Initialization

At minimum, a11ydrops requires a `target` HTML element to be defined and passed into the `a11ydrops` function call.
The `target` element should be the parent container element that wraps your menu.

There are optional [`configuration options`](#config-options) object that can modify default plugin parameters.

**ES6 Module**

```javascript
import a11ydrops from "a11ydrops";

let nav = document.querySelector("#main-nav");
a11ydrops.init(nav, {
	// options
	selector: "li"
});
```

**Vanilla JS**

```html
<script src="{PATH_TO_SCRIPT}/a11ydrops.min.js" />;
```

```javascript
var nav = document.querySelector("#main-nav");
a11ydrops.init(nav, {
	// options
	selector: "li",
	menu: ".sub-menu",
	buttonText: '<span class="sr-only">Toggle Menu</span>',
	buttonClass: "button button-blue"
});
```

## Example HTML

```html
<ul id="main-nav">
	<li>
		<a href="#">About Us</a>
		<ul class="sub-menu">
			<li><a href="#">Our Team</a></li>
			<li><a href="#">History</a></li>
			<li><a href="#">Contact Us</a></li>
			<!-- ... more menu items -->
		</ul>
	</li>
	<li>
		<a href="#">Our Work</a>
		<ul class="sub-menu">
			<li><a href="#">Print</a></li>
			<li><a href="#">Websites</a></li>
			<li><a href="#">App Development</a></li>
			<!-- ... more menu items -->
		</ul>
	</li>
	<!-- ... more menu items -->
</ul>
```

## Config Options

Use following configuration options to modify a11ydrops functionality.

| Option        | Description                                         | Default         | Type    |
| ------------- | --------------------------------------------------- | --------------- | ------- |
| selector      | Element that contains the menu.                     | `'li'`          | String  |
| menu          | The ID or class for the menu.                       | `'.sub-menu'`   | String  |
| activeClass   | The active/open class for the menu.                 | `'active'`      | String  |
| hover         | Toggle the activeClass on mouse hover.              | `false`         | Boolean |
| buttonText    | Text for the dropdown menu button.                  | `'Toggle Menu'` | String  |
| buttonClasses | Add additional classes to the dropdown menu button. | null            | String  |

## License

a11ydrops is released under the MIT license.
