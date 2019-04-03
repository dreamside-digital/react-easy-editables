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

var _LinkEditor = require("../editingTools/LinkEditor");

var _LinkEditor2 = _interopRequireDefault(_LinkEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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


  return _react2.default.createElement(
    _Editable2.default,
    _extends({
      Editor: _LinkEditor2.default,
      handleSave: handleSave,
      content: { link: link, anchor: anchor }
    }, props),
    _react2.default.createElement(
      "a",
      { href: link, className: classes },
      anchor
    )
  );
};

EditableLink.propTypes = {
  content: _propTypes2.default.shape({ anchor: _propTypes2.default.string, link: _propTypes2.default.string }).isRequired,
  onSave: _propTypes2.default.func.isRequired,
  classes: _propTypes2.default.string,
  EditorProps: _propTypes2.default.shape({ anchor: _propTypes2.default.object, link: _propTypes2.default.object })
};

EditableLink.defaultProps = {
  content: { anchor: '', link: '' },
  onSave: function onSave(newContent) {
    return console.log('Implement a function to save changes!', newContent);
  },
  EditorProps: { anchor: {}, link: {} }
};

exports.default = EditableLink;