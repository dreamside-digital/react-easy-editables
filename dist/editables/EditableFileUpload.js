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

var _FileUploadEditor = require("../editingTools/FileUploadEditor");

var _FileUploadEditor2 = _interopRequireDefault(_FileUploadEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  action: {
    display: 'flex'
  },
  icon: {
    marginRight: "10px",
    color: "#e70094"
  }
};

var EditableFileUpload = function EditableFileUpload(props) {
  var handleSave = function handleSave(content) {
    props.onSave(content);
  };

  var _props$content = props.content,
      filename = _props$content.filename,
      filepath = _props$content.filepath,
      filetype = _props$content.filetype;


  return _react2.default.createElement(
    _Editable2.default,
    _extends({
      Editor: _FileUploadEditor2.default,
      handleSave: handleSave,
      content: {
        filepath: filepath,
        filename: filename,
        filetype: filetype
      }
    }, props),
    _react2.default.createElement(
      "div",
      { className: "action-link", style: styles.action },
      _react2.default.createElement(
        "a",
        { href: filepath, target: "_blank", rel: "noopener noreferrer" },
        filename,
        " ",
        filetype && "(" + filetype + ")"
      )
    )
  );
};

EditableFileUpload.propTypes = {
  content: _propTypes2.default.shape({ filepath: _propTypes2.default.string.isRequired, filename: _propTypes2.default.string, filetype: _propTypes2.default.string }).isRequired,
  onSave: _propTypes2.default.func.isRequired,
  onDelete: _propTypes2.default.func,
  maxSize: _propTypes2.default.number,
  classes: _propTypes2.default.string,
  EditorProps: _propTypes2.default.object
};

EditableFileUpload.defaultProps = {
  content: { filepath: '#', filename: "Placeholder" },
  onSave: function onSave(content) {
    return console.log('Implement a function to save changes!', content);
  },
  maxSize: 1024 * 1024 * 2 // 2MB
};

exports.default = EditableFileUpload;