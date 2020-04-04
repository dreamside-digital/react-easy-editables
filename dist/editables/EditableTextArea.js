"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Editable = _interopRequireDefault(require("./Editable"));

var _TextAreaEditor = _interopRequireDefault(require("../editingTools/TextAreaEditor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var styles = {
  whiteSpace: "pre-wrap"
};

var EditableTextArea = function EditableTextArea(_ref) {
  var classes = _ref.classes,
      content = _ref.content,
      props = _objectWithoutProperties(_ref, ["classes", "content"]);

  var handleSave = function handleSave(newContent) {
    props.onSave(newContent);
  };

  var text = content.text;
  return /*#__PURE__*/_react["default"].createElement(_Editable["default"], _extends({
    Editor: _TextAreaEditor["default"],
    handleSave: handleSave,
    content: content,
    classes: classes
  }, props), /*#__PURE__*/_react["default"].createElement("span", {
    className: classes,
    style: styles
  }, text));
};

EditableTextArea.propTypes = {
  content: _propTypes["default"].shape({
    text: _propTypes["default"].string
  }).isRequired,
  onSave: _propTypes["default"].func.isRequired,
  onDelete: _propTypes["default"].func,
  classes: _propTypes["default"].string,
  EditorProps: _propTypes["default"].object
};
EditableTextArea.defaultProps = {
  content: {
    text: ''
  },
  onSave: function onSave(newContent) {
    return console.log('Implement a function to save changes!', newContent);
  }
};
var _default = EditableTextArea;
exports["default"] = _default;