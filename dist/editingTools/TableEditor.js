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

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    minWidth: "200px"
  },
  formControl: {
    width: "100%"
  },
  input: {
    fontSize: "0.8rem"
  },
  button: {
    marginLeft: "1rem"
  },
  disabled: {
    fontStyle: "italic",
    textTransform: "uppercase"
  },
  icon: {
    height: "24px",
    width: "24px"
  }
};
var StyledTable = (0, _styles.withStyles)(styles)(function (props) {
  var content = props.content;
  var headerRow = content[0];
  var tableData = content.slice(1);
  return /*#__PURE__*/_react["default"].createElement(_Paper["default"], {
    className: props.classes.container
  }, /*#__PURE__*/_react["default"].createElement(_Table["default"], {
    className: props.classes.table,
    size: "small"
  }, /*#__PURE__*/_react["default"].createElement(_TableHead["default"], null, /*#__PURE__*/_react["default"].createElement(_TableRow["default"], null, headerRow.map(function (header, index) {
    return /*#__PURE__*/_react["default"].createElement(_TableCell["default"], {
      key: "header-".concat(index)
    }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
      type: "text",
      value: header,
      multiline: true,
      onChange: props.handleChange(index, 0),
      className: props.classes.formControl
    }));
  }), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null))), /*#__PURE__*/_react["default"].createElement(_TableBody["default"], null, tableData.map(function (row, rowIndex) {
    return /*#__PURE__*/_react["default"].createElement(_TableRow["default"], {
      key: "row-".concat(rowIndex)
    }, row.map(function (item, itemIndex) {
      return /*#__PURE__*/_react["default"].createElement(_TableCell["default"], {
        key: "$item-".concat(rowIndex, "-").concat(itemIndex),
        className: props.classes.cell
      }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
        type: "text",
        value: item,
        onChange: props.handleChange(itemIndex, rowIndex + 1),
        multiline: true,
        InputProps: {
          className: props.classes.input
        },
        className: props.classes.formControl
      }));
    }), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
      "aria-label": "Delete row",
      onClick: props.handleDeleteRow(rowIndex + 1),
      className: props.classes.icon
    }, "\xD7")));
  }), /*#__PURE__*/_react["default"].createElement(_TableRow["default"], null, headerRow.map(function (header, index) {
    return /*#__PURE__*/_react["default"].createElement(_TableCell["default"], {
      key: "header-".concat(index)
    }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
      "aria-label": "Delete column",
      onClick: props.handleDeleteColumn(index),
      className: props.classes.icon
    }, "\xD7"));
  })))), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    className: props.classes.button,
    onClick: props.addRow
  }, "Add row"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    className: props.classes.button,
    onClick: props.addColumn
  }, "Add column"));
});

var EditableTable = /*#__PURE__*/function (_React$Component) {
  _inherits(EditableTable, _React$Component);

  var _super = _createSuper(EditableTable);

  function EditableTable() {
    var _this;

    _classCallCheck(this, EditableTable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (itemIndex, rowIndex) {
      return function (input) {
        var newContent = _toConsumableArray(_this.props.content);

        var inputValue = input.target ? input.target.value : input;

        var newRow = _toConsumableArray(newContent[rowIndex]);

        newRow.splice(itemIndex, 1, inputValue);
        newContent.splice(rowIndex, 1, newRow);

        _this.props.onContentChange(newContent);
      };
    });

    _defineProperty(_assertThisInitialized(_this), "handleDeleteRow", function (rowIndex) {
      return function () {
        var newContent = _toConsumableArray(_this.props.content);

        newContent.splice(rowIndex, 1);

        _this.props.onContentChange(newContent);
      };
    });

    _defineProperty(_assertThisInitialized(_this), "defaultRowData", function () {
      var row = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _this.props.content.tableStructure.forEach(function (column) {
        row[column.fieldName] = "";
      });

      return row;
    });

    _defineProperty(_assertThisInitialized(_this), "addRow", function () {
      var newContent = _toConsumableArray(_this.props.content);

      var rowDup = newContent[0];
      var newRow = rowDup.map(function (item) {
        return "";
      });
      newContent.push(newRow);

      _this.props.onContentChange(newContent);
    });

    _defineProperty(_assertThisInitialized(_this), "addColumn", function () {
      var newContent = _this.props.content.map(function (row) {
        row.push([]);
        return row;
      });

      _this.props.onContentChange(newContent);
    });

    _defineProperty(_assertThisInitialized(_this), "handleDeleteColumn", function (colIndex) {
      return function () {
        console.log({
          colIndex: colIndex
        });

        var newContent = _toConsumableArray(_this.props.content).map(function (row) {
          row.splice(colIndex, 1);
          return row;
        });

        _this.props.onContentChange(newContent);
      };
    });

    return _this;
  }

  _createClass(EditableTable, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(StyledTable, _extends({}, this.props, {
        content: this.props.content,
        addRow: this.addRow,
        addColumn: this.addColumn,
        handleDeleteRow: this.handleDeleteRow,
        handleDeleteColumn: this.handleDeleteColumn,
        handleChange: this.handleChange,
        handleHeaderChange: this.handleHeaderChange
      }));
    }
  }]);

  return EditableTable;
}(_react["default"].Component);

var _default = EditableTable;
exports["default"] = _default;