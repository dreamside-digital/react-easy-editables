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

var _PlainTextEditor = require("../editingTools/PlainTextEditor");

var _PlainTextEditor2 = _interopRequireDefault(_PlainTextEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var EditableText = function EditableText(_ref) {
  var classes = _ref.classes,
      props = _objectWithoutProperties(_ref, ["classes"]);

  var handleSave = function handleSave(newContent) {
    props.onSave(newContent);
  };

  var text = props.content.text;


  return _react2.default.createElement(
    _Editable2.default,
    _extends({
      Editor: _PlainTextEditor2.default,
      handleSave: handleSave,
      content: { text: text },
      classes: classes
    }, props),
    _react2.default.createElement(
      "span",
      { className: classes },
      text
    )
  );
};

EditableText.propTypes = {
  content: _propTypes2.default.shape({ text: _propTypes2.default.string }).isRequired,
  onSave: _propTypes2.default.func.isRequired,
  onDelete: _propTypes2.default.func,
  classes: _propTypes2.default.string,
  EditorProps: _propTypes2.default.object
};

EditableText.defaultProps = {
  content: { text: 'Placeholder' },
  onSave: function onSave(newContent) {
    return console.log('Implement a function to save changes!', newContent);
  }
};

exports.default = EditableText;