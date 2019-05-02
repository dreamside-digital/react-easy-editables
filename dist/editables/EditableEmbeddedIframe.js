"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Editable = require("./Editable");

var _Editable2 = _interopRequireDefault(_Editable);

var _EmbeddedIframeEditor = require("../editingTools/EmbeddedIframeEditor");

var _EmbeddedIframeEditor2 = _interopRequireDefault(_EmbeddedIframeEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var EmbeddedIframe = function EmbeddedIframe(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ["className"]);

  var handleSave = function handleSave(newContent) {
    props.onSave(newContent);
  };

  var src = props.content.src;


  return _react2.default.createElement(
    _Editable2.default,
    _extends({
      Editor: _EmbeddedIframeEditor2.default,
      handleSave: handleSave,
      content: { src: src }
    }, props),
    _react2.default.createElement(
      "div",
      { className: "embedded-iframe" },
      _react2.default.createElement("iframe", {
        title: "iframe",
        src: src,
        frameBorder: "0",
        allowFullScreen: true
      })
    )
  );
};

EmbeddedIframe.propTypes = {
  content: _propTypes2.default.shape({ src: _propTypes2.default.string }).isRequired,
  onSave: _propTypes2.default.func.isRequired
};

EmbeddedIframe.defaultProps = {
  content: { src: 'https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1KHAFOibwGI5gqfn9uPGsIRaYUoqB48jtZLJkJhBW_SQ&font=Default&lang=en&initial_zoom=2&height=650' },
  onSave: function onSave(newContent) {
    return console.log('Implement a function to save changes!', newContent);
  }
};

exports.default = EmbeddedIframe;