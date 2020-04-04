"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Edit = _interopRequireDefault(require("@material-ui/icons/Edit"));

var _Delete = _interopRequireDefault(require("@material-ui/icons/Delete"));

var _Check = _interopRequireDefault(require("@material-ui/icons/Check"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var EditorWrapper = function EditorWrapper(props) {
  var styles = props.theme;

  if (props.fullWidth) {
    styles = _objectSpread({}, styles, {
      editContainer: _objectSpread({}, styles.editContainer, {
        padding: "0"
      }),
      actions: _objectSpread({}, styles.actions, {
        top: "5px"
      })
    });
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "edit-container",
    style: props.isEditing ? _objectSpread({}, styles.editContainer, {}, styles.editContainerHighlight) : styles.editContainer
  }, props.isEditing && /*#__PURE__*/_react["default"].createElement("div", {
    className: "actions",
    style: props.fullWidth ? _objectSpread({}, styles.actions, {
      position: "relative"
    }) : styles.actions
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "cancel-icon",
    style: styles.button,
    onClick: props.toggleEditing
  }, /*#__PURE__*/_react["default"].createElement(_Close["default"], {
    style: styles.icon
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "save-icon",
    style: _objectSpread({}, styles.button, {}, styles.saveButton),
    onClick: props.handleSave
  }, /*#__PURE__*/_react["default"].createElement(_Check["default"], {
    style: styles.icon
  }))), !props.isEditing && /*#__PURE__*/_react["default"].createElement("div", {
    className: "actions",
    style: styles.actions
  }, props.handleDelete && props.disableDelete !== true && /*#__PURE__*/_react["default"].createElement("div", {
    className: "delete-icon",
    style: styles.button,
    onClick: props.handleDelete
  }, /*#__PURE__*/_react["default"].createElement(_Delete["default"], {
    style: styles.icon
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "edit-icon",
    style: styles.button,
    onClick: props.toggleEditing
  }, /*#__PURE__*/_react["default"].createElement(_Edit["default"], {
    style: styles.icon
  }))), props.children);
};

var _default = EditorWrapper;
exports["default"] = _default;