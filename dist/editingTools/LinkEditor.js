"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  label: {
    color: 'inherit'
  },
  container: {
    padding: '0.5rem'
  },
  textField: {
    width: "100%",
    fontSize: "inherit",
    fontFamily: "inherit",
    fontWeight: "inherit",
    color: "rgba(0,0,0,0.8)",
    backgroundColor: "#fff"
  },
  input: {
    borderRadius: '0'
  }
};

var LinkEditor = function LinkEditor(_ref) {
  var content = _ref.content,
      onContentChange = _ref.onContentChange,
      classes = _ref.classes,
      EditorProps = _ref.EditorProps,
      editAnchorText = _ref.editAnchorText;

  var handleChange = function handleChange(id) {
    return function (event) {
      event.preventDefault();
      event.stopPropagation();
      onContentChange(_objectSpread({}, content, _defineProperty({}, id, event.currentTarget.value)));
    };
  };

  var anchor = content.anchor,
      link = content.link;
  return /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    spacing: 1,
    className: classes,
    style: styles.container
  }, editAnchorText && /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], _extends({
    id: "link-text",
    label: "Link text",
    value: anchor,
    onChange: handleChange('anchor'),
    autoFocus: true,
    variant: "outlined",
    size: "small",
    margin: "dense",
    InputProps: {
      style: styles.input
    },
    style: styles.textField,
    required: true
  }, EditorProps.anchor))), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], _extends({
    id: "link-url",
    label: "Link URL",
    variant: "outlined",
    value: link,
    onChange: handleChange('link'),
    size: "small",
    margin: "dense",
    InputProps: {
      style: styles.input
    },
    style: styles.textField,
    required: true
  }, EditorProps.link))));
};

LinkEditor.propTypes = {
  content: _propTypes["default"].shape({
    anchor: _propTypes["default"].string,
    link: _propTypes["default"].string
  }).isRequired,
  onContentChange: _propTypes["default"].func.isRequired,
  classes: _propTypes["default"].string,
  EditorProps: _propTypes["default"].shape({
    anchor: _propTypes["default"].object,
    link: _propTypes["default"].object
  }),
  editAnchorText: _propTypes["default"].bool
};
LinkEditor.defaultProps = {
  content: {
    anchor: '',
    link: ''
  },
  onContentChange: function onContentChange(updated) {
    return console.log('Implement a function to save content changes.', updated);
  },
  editAnchorText: true,
  classes: "",
  EditorProps: {
    anchor: {},
    link: {}
  }
};
var _default = LinkEditor;
exports["default"] = _default;