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

  const keys = Object.keys(attrs);
  for (let i = 0; i < keys.length; i++) {
    const name = keys[i];

    if (name === 'style') {
      const rules = attrs[name];
      const keys = Object.keys(rules);

      for (let i = 0; i < keys.length; i++) {
        const styleAttr = keys[i];
        element.style[styleAttr] = rules[styleAttr];
      }
    } else if (typeof element[name] !== 'undefined') {
      element[name] = attrs[name];
    } else {
      element.setAttribute(name, attrs[name]);
    }
  }

  for (let i = 0; i < childElements.length; i++) {
    const child = childElements[i];
    
    element.appendChild(
      child instanceof HTMLElement ?
        child :
        document.createTextNode(child)
    );
  }

  return element;
}

export default jsxr;
