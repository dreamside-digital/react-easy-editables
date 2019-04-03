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

var _NumberEditor = require("../editingTools/NumberEditor");

var _NumberEditor2 = _interopRequireDefault(_NumberEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var EditableNumber = function EditableNumber(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ["className"]);

  var handleSave = function handleSave(newContent) {
    props.onSave(newContent);
  };

  var number = props.content.number;


  return _react2.default.createElement(
    _Editable2.default,
    _extends({
      Editor: _NumberEditor2.default,
      handleSave: handleSave,
      content: { number: number }
    }, props),
    _react2.default.createElement(
      "span",
      { className: className },
      number
    )
  );
};

EditableNumber.propTypes = {
  content: _propTypes2.default.shape({ number: _propTypes2.default.number }).isRequired,
  onSave: _propTypes2.default.func.isRequired,
  classes: _propTypes2.default.string,
  EditorProps: _propTypes2.default.object
};

EditableNumber.defaultProps = {
  content: { number: '' },
  onSave: function onSave(newContent) {
    return console.log('Implement a function to save changes!', newContent);
  }
};

exports.default = EditableNumber;