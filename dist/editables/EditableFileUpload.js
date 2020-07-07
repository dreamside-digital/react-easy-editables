"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Editable = _interopRequireDefault(require("./Editable"));

var _FileUploadEditor = _interopRequireDefault(require("../editingTools/FileUploadEditor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var EditableFileUpload = function EditableFileUpload(props) {
  var handleSave = function handleSave(content) {
    props.onSave(content);
  };

  var classes = props.classes,
      styles = props.styles,
      content = props.content;
  var filename = content.filename,
      filepath = content.filepath,
      filetype = content.filetype;
  return /*#__PURE__*/_react["default"].createElement(_Editable["default"], _extends({
    Editor: _FileUploadEditor["default"],
    handleSave: handleSave,
    content: {
      filepath: filepath,
      filename: filename,
      filetype: filetype
    }
  }, props), /*#__PURE__*/_react["default"].createElement("div", {
    className: "action-link ".concat(classes),
    style: styles
  }, /*#__PURE__*/_react["default"].createElement("a", {
    className: props.linkClasses,
    href: filepath,
    target: "_blank",
    rel: "noopener noreferrer"
  }, props.linkText ? props.linkText : filename)));
};

EditableFileUpload.propTypes = {
  content: _propTypes["default"].shape({
    filepath: _propTypes["default"].string.isRequired,
    filename: _propTypes["default"].string,
    filetype: _propTypes["default"].string
  }).isRequired,
  onSave: _propTypes["default"].func.isRequired,
  onDelete: _propTypes["default"].func,
  maxSize: _propTypes["default"].number,
  classes: _propTypes["default"].string,
  EditorProps: _propTypes["default"].object,
  mimetypes: _propTypes["default"].string
};
EditableFileUpload.defaultProps = {
  content: {
    filepath: '#',
    filename: "Placeholder"
  },
  onSave: function onSave(content) {
    return console.log('Implement a function to save changes!', content);
  },
  maxSize: 1024 * 1024 * 2,
  // 2MB
  mimetypes: "application/pdf,application/msword,application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain,application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.openxmlformats-officedocument.presentationml.slideshow, .csv",
  classes: "",
  styles: {}
};
var _default = EditableFileUpload;
exports["default"] = _default;