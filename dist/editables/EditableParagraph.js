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

var _RichTextEditor = require("../editingTools/RichTextEditor");

var _RichTextEditor2 = _interopRequireDefault(_RichTextEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EditableParagraph = function EditableParagraph(props) {
  var handleSave = function handleSave(newContent) {
    props.onSave(newContent);
  };

  var text = props.content.text;


  return _react2.default.createElement(
    _Editable2.default,
    _extends({
      Editor: _RichTextEditor2.default,
      handleSave: handleSave,
      content: { text: text }
    }, props),
    _react2.default.createElement("div", { className: props.classes, dangerouslySetInnerHTML: { __html: text } })
  );
};

EditableParagraph.propTypes = {
  content: _propTypes2.default.shape({ text: _propTypes2.default.string }).isRequired,
  onSave: _propTypes2.default.func.isRequired,
  onDelete: _propTypes2.default.func,
  classes: _propTypes2.default.string,
  EditorProps: _propTypes2.default.object
};

EditableParagraph.defaultProps = {
  content: { text: 'Placeholder' },
  onSave: function onSave(newContent) {
    return console.log('Implement a function to save changes!', newContent);
  }
};

exports.default = EditableParagraph;