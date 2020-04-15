"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _EditablesContext = require("../editables/EditablesContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  header: {
    display: "flex"
  },
  input: {
    width: "100%",
    fontSize: "inherit",
    fontFamily: "inherit",
    fontWeight: "inherit",
    color: "rgba(0,0,0,0.8)",
    backgroundColor: "#fff",
    border: "1px solid ".concat(_EditablesContext.theme.lightColor)
  }
};

var NumberEditor = function NumberEditor(_ref) {
  var content = _ref.content,
      onContentChange = _ref.onContentChange,
      classes = _ref.classes,
      EditorProps = _ref.EditorProps,
      placeholder = _ref.placeholder;

  var handleChange = function handleChange(event) {
    event.preventDefault();
    event.stopPropagation();
    onContentChange(_objectSpread({}, content, {
      number: event.currentTarget.value
    }));
  };

  var number = Boolean(content) ? content.number : '';
  return /*#__PURE__*/_react["default"].createElement("input", _extends({
    type: "number",
    style: styles.input,
    value: number,
    onChange: handleChange,
    className: classes,
    placeholder: placeholder,
    autoFocus: true
  }, EditorProps));
};

NumberEditor.propTypes = {
  content: _propTypes["default"].shape({
    number: _propTypes["default"].number
  }).isRequired,
  onContentChange: _propTypes["default"].func.isRequired,
  classes: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  EditorProps: _propTypes["default"].object
};
NumberEditor.defaultProps = {
  content: {
    text: ""
  },
  onContentChange: function onContentChange(updated) {
    return console.log('Implement a function to save content changes.', updated);
  },
  classes: "",
  EditorProps: {}
};
var _default = NumberEditor;
exports["default"] = _default;