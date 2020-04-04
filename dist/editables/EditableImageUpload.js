"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Editable = _interopRequireDefault(require("./Editable"));

var _ImageUploadEditor = _interopRequireDefault(require("../editingTools/ImageUploadEditor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultStyles = {
  imageContainer: {
    width: '100%'
  },
  image: {
    height: 'auto',
    width: '100%'
  }
};

var EditableImageUpload = function EditableImageUpload(props) {
  var handleSave = function handleSave(content) {
    props.onSave(content);
  };

  var classes = props.classes,
      styles = props.styles,
      content = props.content,
      showCaption = props.showCaption;
  var imageSrc = content.imageSrc,
      caption = content.caption,
      title = content.title;
  return /*#__PURE__*/_react["default"].createElement(_Editable["default"], _extends({
    Editor: _ImageUploadEditor["default"],
    handleSave: handleSave,
    content: {
      imageSrc: imageSrc,
      caption: caption,
      title: title
    }
  }, props), /*#__PURE__*/_react["default"].createElement("div", {
    className: classes,
    style: _objectSpread({}, defaultStyles.imageContainer, {}, styles.container)
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: imageSrc,
    alt: title,
    style: _objectSpread({}, defaultStyles.image, {}, styles.image)
  }), showCaption && /*#__PURE__*/_react["default"].createElement("small", null, caption)));
};

EditableImageUpload.propTypes = {
  content: _propTypes["default"].shape({
    imageSrc: _propTypes["default"].string,
    caption: _propTypes["default"].string,
    title: _propTypes["default"].string
  }).isRequired,
  onSave: _propTypes["default"].func.isRequired,
  uploadImage: _propTypes["default"].func.isRequired,
  onDelete: _propTypes["default"].func,
  showCaption: _propTypes["default"].bool,
  maxSize: _propTypes["default"].number,
  styles: _propTypes["default"].shape({
    container: _propTypes["default"].object,
    image: _propTypes["default"].object
  }),
  classes: _propTypes["default"].string,
  EditorProps: _propTypes["default"].shape({
    image: _propTypes["default"].object,
    caption: _propTypes["default"].object,
    title: _propTypes["default"].object
  })
};
EditableImageUpload.defaultProps = {
  content: {
    imageSrc: "https://www.nomadiclabs.ca/img/logo-03.png",
    caption: "",
    title: ""
  },
  onSave: function onSave(content) {
    return console.log('Implement a function to save changes!', content);
  },
  showCaption: false,
  maxSize: 1024 * 1024 * 2,
  // 2MB
  styles: {
    container: {},
    image: {}
  },
  EditorProps: {
    image: {},
    caption: {},
    title: {}
  }
};
var _default = EditableImageUpload;
exports["default"] = _default;