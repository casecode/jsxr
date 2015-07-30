/**
 * @desc jsxr() transforms JSX into an HTMLElement
 *
 * @param {(String)} tag - tag or component name
 * @param {Object} [attributes={}] - optional element attributes
 * @param {String[]} [children] - child elements can be tags or components
 *
 * @return {HTMLElement} HTML component
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
function jsxr(tag, attributes) {
  var _ref;

  // default params cannot handle null values
  var attrs = attributes || {};

  // remaining children can be of type string or array
  // ensure children is a flattened array

  for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  var childElements = (_ref = []).concat.apply(_ref, children);

  var element = tag instanceof HTMLElement ? tag : document.createElement(tag);

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = Object.keys(attrs)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _name = _step.value;

      if (typeof element[_name] !== 'undefined') {
        element[_name] = attrs[_name];
      } else {
        element.setAttribute(_name, attrs[_name]);
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator['return']) {
        _iterator['return']();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = childElements[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var child = _step2.value;

      element.appendChild(child instanceof HTMLElement ? child : document.createTextNode(child));
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2['return']) {
        _iterator2['return']();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return element;
}

exports['default'] = jsxr;
module.exports = exports['default'];