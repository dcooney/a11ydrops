/**
 * Convert NodeList to array
 * @param {NodeList} nodeList
 */
let toArray = (nodeList = null) => {
	if (nodeList) {
		return Array.prototype.slice.call(nodeList);
	}
};
module.exports = toArray;
