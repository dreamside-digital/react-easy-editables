"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Edit = require("@material-ui/icons/Edit");

var _Edit2 = _interopRequireDefault(_Edit);

var _Delete = require("@material-ui/icons/Delete");

var _Delete2 = _interopRequireDefault(_Delete);

var _Check = require("@material-ui/icons/Check");

var _Check2 = _interopRequireDefault(_Check);

var _Close = require("@material-ui/icons/Close");

var _Close2 = _interopRequireDefault(_Close);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EditorWrapper = function EditorWrapper(props) {
  var styles = props.theme;

  if (props.fullWidth) {
    styles = _extends({}, styles, {
      editContainer: {
        padding: "0"
      },
      actions: _extends({}, styles.actions, {
        top: "5px"
      })
    });
  }

  return _react2.default.createElement(
    "div",
    {
      className: "edit-container",
      style: props.isEditing ? _extends({}, styles.editContainer, styles.editContainerHighlight) : styles.editContainer
    },
    props.isEditing && _react2.default.createElement(
      "div",
      { className: "actions", style: props.fullWidth ? _extends({}, styles.actions, { position: "relative" }) : styles.actions },
      _react2.default.createElement(
        "div",
        {
          className: "cancel-icon",
          style: styles.button,
          onClick: props.toggleEditing
        },
        _react2.default.createElement(_Close2.default, { style: styles.icon })
      ),
      _react2.default.createElement(
        "div",
        {
          className: "save-icon",
          style: _extends({}, styles.button, styles.saveButton),
          onClick: props.handleSave
        },
        _react2.default.createElement(_Check2.default, { style: styles.icon })
      )
    ),
    !props.isEditing && _react2.default.createElement(
      "div",
      { className: "actions", style: styles.actions },
      props.handleDelete && props.disableDelete !== true && _react2.default.createElement(
        "div",
        {
          className: "delete-icon",
          style: styles.button,
          onClick: props.handleDelete
        },
        _react2.default.createElement(_Delete2.default, { style: styles.icon })
      ),
      _react2.default.createElement(
        "div",
        {
          className: "edit-icon",
          style: styles.button,
          onClick: props.toggleEditing
        },
        _react2.default.createElement(_Edit2.default, { style: styles.icon })
      )
    ),
    props.children
  );
};

exports.default = EditorWrapper;