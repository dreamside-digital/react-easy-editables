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

var _ImageUploadEditor = require("../editingTools/ImageUploadEditor");

var _ImageUploadEditor2 = _interopRequireDefault(_ImageUploadEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var EditableBackgroundImage = function EditableBackgroundImage(_ref) {
  var content = _ref.content,
      onSave = _ref.onSave,
      children = _ref.children,
      styles = _ref.styles,
      classes = _ref.classes,
      rest = _objectWithoutProperties(_ref, ["content", "onSave", "children", "styles", "classes"]);

  var imageSrc = content.imageSrc;


  var defaultStyles = {
    backgroundImage: "url('" + imageSrc + "')",
    backgroundColor: "#ccc",
    height: 'inherit',
    display: "flex",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  };

  var handleSave = function handleSave(newContent) {
    onSave(newContent);
  };

  return _react2.default.createElement(
    _Editable2.default,
    _extends({
      Editor: _ImageUploadEditor2.default,
      handleSave: handleSave,
      content: { imageSrc: imageSrc },
      showCaption: false,
      showChildren: true,
      fullWidth: true
    }, rest),
    _react2.default.createElement(
      "div",
      {
        className: classes,
        style: _extends({}, defaultStyles, styles)
      },
      children
    )
  );
};

EditableBackgroundImage.propTypes = {
  content: _propTypes2.default.shape({ imageSrc: _propTypes2.default.string }).isRequired,
  onSave: _propTypes2.default.func.isRequired,
  onDelete: _propTypes2.default.func,
  maxSize: _propTypes2.default.number,
  styles: _propTypes2.default.object,
  classes: _propTypes2.default.string,
  EditorProps: _propTypes2.default.shape({ image: _propTypes2.default.object })
};

EditableBackgroundImage.defaultProps = {
  content: { imageSrc: "https://placebear.com/300/200" },
  onSave: function onSave(content) {
    return console.log('Implement a function to save changes!', content);
  },
  maxSize: 1024 * 1024 * 2, // 2MB
  styles: {},
  EditorProps: { image: {} }
};

exports.default = EditableBackgroundImage;