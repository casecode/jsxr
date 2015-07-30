/**
 * @desc jsxml() transforms JSX into an HTMLElement
 *
 * @param {(String)} tag - tag or component name
 * @param {Object} [attributes={}] - optional element attributes
 * @param {String[]} [children] - child elements can be tags or components
 *
 * @return {HTMLElement} HTML component
 */
function jsxml(tag, attributes, ...children) {
  // default params cannot handle null values
  const attrs = attributes || {};

  // remaining children can be of type string or array
  // ensure children is a flattened array
  const childElements = [].concat(...children);

  if (tag instanceof HTMLElement) return tag;

  if (typeof tag !== 'string') {
    throw new Error('jsxml tags must be regular HTML elements or components');
  }

  const element = document.createElement(tag);

  for (let name of Object.keys(attrs)) {
    if (typeof element[name] !== 'undefined') {
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

export default jsxml;
