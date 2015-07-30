/**
 * @desc jsxr() transforms JSX into an HTMLElement
 *
 * @param {(String)} tag - tag or component name
 * @param {Object} [attributes={}] - optional element attributes
 * @param {String[]} [children] - child elements can be tags or components
 *
 * @return {HTMLElement} HTML component
 */
function jsxr(tag, attributes, ...children) {
  // default params cannot handle null values
  const attrs = attributes || {};

  // remaining children can be of type string or array
  // ensure children is a flattened array
  const childElements = [].concat(...children);

  const element = tag instanceof HTMLElement ? tag : document.createElement(tag);

  for (let name of Object.keys(attrs)) {
    if (name === 'style') {
      const rules = attrs[name];

      for (let styleAttr of Object.keys(rules)) {
        element.style[styleAttr] = rules[styleAttr];
      }
    } else if (typeof element[name] !== 'undefined') {
      element[name] = attrs[name];
    } else {
      element.setAttribute(name, attrs[name]);
    }
  }

  for (let child of childElements) {
    element.appendChild(
      child instanceof HTMLElement ?
        child :
        document.createTextNode(child)
    );
  }

  return element;
}

export default jsxr;
