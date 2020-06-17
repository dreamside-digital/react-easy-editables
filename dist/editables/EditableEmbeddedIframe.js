"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Editable = _interopRequireDefault(require("./Editable"));

var _EmbeddedIframeEditor = _interopRequireDefault(require("../editingTools/EmbeddedIframeEditor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EmbeddedIframe = function EmbeddedIframe(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ["className"]);

  var handleSave = function handleSave(newContent) {
    props.onSave(newContent);
  };

  var _props$content = props.content,
      src = _props$content.src,
      height = _props$content.height,
      width = _props$content.width,
      allowFullScreen = _props$content.allowFullScreen,
      title = _props$content.title;
  var ratio = height / width * 100;
  var styles = {
    iframeContainer: {
      position: "relative",
      paddingBottom: "".concat(ratio, "%"),
      height: 0,
      overflow: "hidden",
      width: "100%",
      maxWidth: "100%"
    },
    iframe: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%"
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_Editable["default"], _extends({
    Editor: _EmbeddedIframeEditor["default"],
    handleSave: handleSave,
    content: {
      src: src
    }
  }, props), /*#__PURE__*/_react["default"].createElement("div", {
    className: "embedded-iframe",
    style: styles.iframeContainer
  }, /*#__PURE__*/_react["default"].createElement("iframe", _defineProperty({
    title: "iframe",
    src: src,
    style: styles.iframe,
    frameBorder: "0",
    allowFullScreen: true,
    height: height,
    width: width
  }, "title", title))));
};

EmbeddedIframe.propTypes = {
  content: _propTypes["default"].shape({
    src: _propTypes["default"].string,
    height: _propTypes["default"].string,
    width: _propTypes["default"].string,
    allowFullScreen: _propTypes["default"]["boolean"],
    title: _propTypes["default"].string
  }).isRequired,
  onSave: _propTypes["default"].func.isRequired
};
EmbeddedIframe.defaultProps = {
  content: {
    src: 'https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1KHAFOibwGI5gqfn9uPGsIRaYUoqB48jtZLJkJhBW_SQ&font=Default&lang=en&initial_zoom=2&height=650',
    height: '30px',
    width: '560px',
    title: 'Timeline'
  },
  onSave: function onSave(newContent) {
    return console.log('Implement a function to save changes!', newContent);
  }
};
var _default = EmbeddedIframe;
exports["default"] = _default;