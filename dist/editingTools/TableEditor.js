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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
  }
};
var StyledTable = (0, _styles.withStyles)(styles)(function (props) {
  var _props$content = props.content,
      tableStructure = _props$content.tableStructure,
      tableData = _props$content.tableData;
  return /*#__PURE__*/_react["default"].createElement(_Paper["default"], {
    className: props.classes.container
  }, /*#__PURE__*/_react["default"].createElement(_Table["default"], {
    className: props.classes.table
  }, /*#__PURE__*/_react["default"].createElement(_TableHead["default"], null, /*#__PURE__*/_react["default"].createElement(_TableRow["default"], null, tableStructure.map(function (column) {
    return /*#__PURE__*/_react["default"].createElement(_TableCell["default"], {
      key: column.fieldName,
      padding: "dense"
    }, column.header);
  }), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, "Remove"))), /*#__PURE__*/_react["default"].createElement(_TableBody["default"], null, tableData.map(function (row, index) {
    return /*#__PURE__*/_react["default"].createElement(_TableRow["default"], {
      key: "".concat(props.id, "-row-").concat(index)
    }, tableStructure.map(function (column) {
      if (column.type === "custom") {
        var InputComponent = props.customInputs[column.fieldName];
        return /*#__PURE__*/_react["default"].createElement(_TableCell["default"], {
          key: "".concat(column.fieldName, "-").concat(index),
          padding: "dense",
          className: props.classes.cell
        }, /*#__PURE__*/_react["default"].createElement(InputComponent, {
          value: row[column.fieldName],
          handleChange: props.handleChange(column.fieldName, index),
          className: props.classes.input
        }));
      }

      return /*#__PURE__*/_react["default"].createElement(_TableCell["default"], {
        key: "".concat(column.fieldName, "-").concat(index),
        padding: "dense",
        className: props.classes.cell
      }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
        type: column.type,
        value: row[column.fieldName],
        onChange: props.handleChange(column.fieldName, index),
        multiline: true,
        InputProps: {
          className: props.classes.input
        },
        className: props.classes.formControl
      }));
    }), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], {
      padding: "checkbox"
    }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
      "aria-label": "Delete",
      onClick: props.handleDeleteRow(index)
    }, "\xD7")));
  }))), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    className: props.classes.button,
    onClick: props.createNewRow
  }, "Add new row"));
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

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (fieldName, rowIndex) {
      return function (input) {
        var inputValue = input.target ? input.target.value : input;

        var newData = _toConsumableArray(_this.props.content.tableData);

        var row = newData[rowIndex];

        var newRow = _objectSpread({}, row, _defineProperty({}, fieldName, inputValue));

        newData.splice(rowIndex, 1, newRow);

        _this.props.onContentChange(_objectSpread({}, _this.props.content, {
          tableData: newData
        }));
      };
    });

    _defineProperty(_assertThisInitialized(_this), "handleDeleteRow", function (rowIndex) {
      return function () {
        var newData = _toConsumableArray(_this.props.content.tableData);

        newData.splice(rowIndex, 1);

        _this.props.onContentChange(_objectSpread({}, _this.props.content, {
          tableData: newData
        }));
      };
    });

    _defineProperty(_assertThisInitialized(_this), "defaultRowData", function () {
      var row = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _this.props.content.tableStructure.forEach(function (column) {
        row[column.fieldName] = "";
      });

      return row;
    });

    _defineProperty(_assertThisInitialized(_this), "createNewRow", function () {
      var emptyRowData = _this.defaultRowData();

      var newData = _this.props.content.tableData ? _toConsumableArray(_this.props.content.tableData) : [];
      newData.push(emptyRowData);

      _this.props.onContentChange(_objectSpread({}, _this.props.content, {
        tableData: newData
      }));
    });

    return _this;
  }

  _createClass(EditableTable, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(StyledTable, _extends({}, this.props, {
        content: this.props.content,
        createNewRow: this.createNewRow,
        handleDeleteRow: this.handleDeleteRow,
        handleChange: this.handleChange
      }));
    }
  }]);

  return EditableTable;
}(_react["default"].Component);

var _default = EditableTable;
exports["default"] = _default;