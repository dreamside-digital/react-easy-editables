"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Editable = _interopRequireDefault(require("./Editable"));

var _LinkEditor = _interopRequireDefault(require("../editingTools/LinkEditor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EditableLink = function EditableLink(_ref) {
  var content = _ref.content,
      onSave = _ref.onSave,
      classes = _ref.classes,
      props = _objectWithoutProperties(_ref, ["content", "onSave", "classes"]);

  var handleSave = function handleSave(newContent) {
    onSave(newContent);
  };

  var link = content.link,
      anchor = content.anchor;
  return /*#__PURE__*/_react["default"].createElement(_Editable["default"], _extends({
    Editor: _LinkEditor["default"],
    handleSave: handleSave,
    content: {
      link: link,
      anchor: anchor
    }
  }, props), /*#__PURE__*/_react["default"].createElement("a", {
    href: link,
    className: classes
  }, anchor));
};

EditableLink.propTypes = {
  content: _propTypes["default"].shape({
    anchor: _propTypes["default"].string,
    link: _propTypes["default"].string
  }).isRequired,
  onSave: _propTypes["default"].func.isRequired,
  classes: _propTypes["default"].string,
  EditorProps: _propTypes["default"].shape({
    anchor: _propTypes["default"].object,
    link: _propTypes["default"].object
  })
};
EditableLink.defaultProps = {
  content: {
    anchor: '',
    link: ''
  },
  onSave: function onSave(newContent) {
    return console.log('Implement a function to save changes!', newContent);
  },
  EditorProps: {
    anchor: {},
    link: {}
  }
};
var _default = EditableLink;
exports["default"] = _default;