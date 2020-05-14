"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Edit = _interopRequireDefault(require("@material-ui/icons/Edit"));

var _Delete = _interopRequireDefault(require("@material-ui/icons/Delete"));

var _Check = _interopRequireDefault(require("@material-ui/icons/Check"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var EditorWrapper = function EditorWrapper(_ref) {
  var theme = _ref.theme,
      startEditing = _ref.startEditing,
      stopEditing = _ref.stopEditing,
      isEditing = _ref.isEditing,
      fullWidth = _ref.fullWidth,
      onSave = _ref.onSave,
      handleDelete = _ref.handleDelete,
      disableDelete = _ref.disableDelete,
      isContentClickTarget = _ref.isContentClickTarget,
      children = _ref.children;
  var styles = theme;

  if (fullWidth) {
    styles = _objectSpread({}, styles, {
      editContainer: _objectSpread({}, styles.editContainer, {
        padding: "0",
        marginBottom: "0"
      }),
      actions: _objectSpread({}, styles.actions, {
        top: "6px"
      })
    });
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    onClick: isContentClickTarget ? startEditing : null,
    className: "edit-container",
    style: isEditing ? _objectSpread({}, styles.editContainer, {}, styles.editContainerHighlight) : styles.editContainer
  }, children, isEditing && /*#__PURE__*/_react["default"].createElement("div", {
    className: "actions",
    style: styles.actions
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "cancel-icon",
    style: styles.button,
    onClick: stopEditing
  }, /*#__PURE__*/_react["default"].createElement(_Close["default"], {
    style: styles.icon
  })), handleDelete && !disableDelete && /*#__PURE__*/_react["default"].createElement("div", {
    className: "delete-icon",
    style: styles.button,
    onClick: handleDelete
  }, /*#__PURE__*/_react["default"].createElement(_Delete["default"], {
    style: styles.icon
  })), /*#__PURE__*/_react["default"].createElement("button", {
    className: "save-icon",
    type: "submit",
    style: _objectSpread({}, styles.button, {}, styles.saveButton),
    onClick: onSave
  }, /*#__PURE__*/_react["default"].createElement(_Check["default"], {
    style: styles.icon
  }))), !isEditing && /*#__PURE__*/_react["default"].createElement("div", {
    className: "actions",
    style: _objectSpread({}, styles.actions, {
      backgroundColor: 'none'
    })
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "edit-icon",
    style: styles.button,
    onClick: startEditing
  }, /*#__PURE__*/_react["default"].createElement(_Edit["default"], {
    style: styles.icon
  }))));
};

EditorWrapper.propTypes = {
  theme: _propTypes["default"].object,
  startEditing: _propTypes["default"].func,
  stopEditing: _propTypes["default"].func,
  onSave: _propTypes["default"].func,
  handleDelete: _propTypes["default"].func,
  isEditing: _propTypes["default"].bool,
  fullWidth: _propTypes["default"].bool,
  disableDelete: _propTypes["default"].bool,
  isContentClickTarget: _propTypes["default"].bool
};
EditorWrapper.defaultProps = {
  isEditing: false,
  fullWidth: false,
  disableDelete: false,
  isContentClickTarget: true
};
var _default = EditorWrapper;
exports["default"] = _default;