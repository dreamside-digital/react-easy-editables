"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Table = _interopRequireDefault(require("@material-ui/core/Table"));

var _TableBody = _interopRequireDefault(require("@material-ui/core/TableBody"));

var _TableCell = _interopRequireDefault(require("@material-ui/core/TableCell"));

var _TableHead = _interopRequireDefault(require("@material-ui/core/TableHead"));

var _TableRow = _interopRequireDefault(require("@material-ui/core/TableRow"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _Editable = _interopRequireDefault(require("./Editable"));

var _TableEditor = _interopRequireDefault(require("../editingTools/TableEditor"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var styles = {
  container: {
    overflowX: "auto",
    paddingBottom: "1rem"
  },
  table: {
    marginBottom: "1rem"
  },
  cell: {
    whiteSpace: "normal",
    wordWrap: "break-word",
    verticalAlign: "bottom",
    fontFamily: "inherit",
    fontSize: "inherit"
  },
  formControl: {
    width: "100%"
  },
  input: {
    fontSize: "1rem"
  },
  button: {
    marginLeft: "1rem"
  },
  disabled: {
    fontStyle: "italic",
    textTransform: "uppercase"
  }
};

var EditableTable = function EditableTable(props) {
  var handleSave = function handleSave(content) {
    props.onSave(content);
  };

  var content = props.content;
  var headerRow = content[0];
  var tableData = content.slice(1);
  return /*#__PURE__*/_react["default"].createElement(_Editable["default"], _extends({
    Editor: _TableEditor["default"],
    handleSave: handleSave,
    content: props.content
  }, props), /*#__PURE__*/_react["default"].createElement(_Paper["default"], {
    className: props.classes.container
  }, /*#__PURE__*/_react["default"].createElement(_Table["default"], {
    className: props.classes.table
  }, /*#__PURE__*/_react["default"].createElement(_TableHead["default"], null, /*#__PURE__*/_react["default"].createElement(_TableRow["default"], null, headerRow.map(function (header) {
    return /*#__PURE__*/_react["default"].createElement(_TableCell["default"], {
      key: header,
      size: "small",
      className: props.classes.cell
    }, header);
  }))), /*#__PURE__*/_react["default"].createElement(_TableBody["default"], null, tableData.map(function (row, rowIndex) {
    return /*#__PURE__*/_react["default"].createElement(_TableRow["default"], {
      key: "".concat(props.id, "-row-").concat(rowIndex),
      size: "small"
    }, row.map(function (item, itemIndex) {
      return /*#__PURE__*/_react["default"].createElement(_TableCell["default"], {
        key: "item-".concat(rowIndex, "-").concat(itemIndex),
        className: props.classes.cell
      }, item);
    }));
  })))));
};

var _default = (0, _styles.withStyles)(styles)(EditableTable);

exports["default"] = _default;