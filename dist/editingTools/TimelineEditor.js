"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Input = _interopRequireDefault(require("@material-ui/core/Input"));

var _Radio = _interopRequireDefault(require("@material-ui/core/Radio"));

var _RadioGroup = _interopRequireDefault(require("@material-ui/core/RadioGroup"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _FormLabel = _interopRequireDefault(require("@material-ui/core/FormLabel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
  header: {
    display: "flex"
  },
  input: {
    width: "100%",
    fontSize: "inherit",
    fontFamily: "inherit",
    fontWeight: "inherit",
    color: "rgba(0,0,0,0.8)",
    backgroundColor: "#fff",
    marginBottom: "1.5rem"
  }
};

var TimelineEditor = /*#__PURE__*/function (_React$Component) {
  _inherits(TimelineEditor, _React$Component);

  var _super = _createSuper(TimelineEditor);

  function TimelineEditor(props) {
    var _this;

    _classCallCheck(this, TimelineEditor);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (id) {
      return function (event) {
        var value = event.currentTarget.value;

        _this.setState({
          content: _objectSpread({}, _this.state.content, _defineProperty({}, id, value))
        });
      };
    });

    _defineProperty(_assertThisInitialized(_this), "handleSpreadsheetIdChange", function (event) {
      var spreadsheetId = event.currentTarget.value;

      _this.setState({
        content: _objectSpread({}, _this.state.content, {
          spreadsheetId: spreadsheetId
        })
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleTimelinesChange", function (event) {
      var timelines = event.currentTarget.value;

      _this.setState({
        content: _objectSpread({}, _this.state.content, {
          timelines: timelines
        })
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleAlignmentChange", function (event) {
      var alignment = event.currentTarget.value;

      _this.setState({
        content: _objectSpread({}, _this.state.content, {
          alignment: alignment
        })
      });
    });

    _this.state = {
      content: _this.props.content
    };
    return _this;
  }

  _createClass(TimelineEditor, [{
    key: "render",
    value: function render() {
      var spreadsheetId = Boolean(this.state.content) ? this.state.content.spreadsheetId : '';
      var timelines = Boolean(this.state.content) ? this.state.content.timelines : '';
      var alignment = Boolean(this.state.content) ? this.state.content.alignment : 'left';
      var interval = Boolean(this.state.content) ? this.state.content.interval : '';
      var startYear = Boolean(this.state.content) ? this.state.content.startYear : '';
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_FormLabel["default"], {
        component: "label",
        htmlFor: "speadsheetId"
      }, "Google spreadsheet ID"), /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
        id: "spreadsheetId",
        style: styles.input,
        value: spreadsheetId,
        onChange: this.handleChange(spreadsheetId),
        helperText: "Enter the ID of the Google Spreadsheet (the part of the url that comes after https://docs.google.com/spreadsheets/d/)",
        required: true
      }), /*#__PURE__*/_react["default"].createElement(_FormLabel["default"], {
        component: "label",
        htmlFor: "timelines"
      }, "Sheet titles"), /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
        id: "timelines",
        style: styles.input,
        value: timelines,
        onChange: this.handleChange('timelines'),
        helperText: "Enter the titles of the spreadsheet tabs, separated by commas.",
        placeholder: "Sheet1, Sheet2, Sheet3",
        required: true
      }), /*#__PURE__*/_react["default"].createElement(_FormLabel["default"], {
        component: "label",
        htmlFor: "interval"
      }, "Time marker interval (optional)"), /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
        id: "interval",
        type: "number",
        style: styles.input,
        value: interval,
        onChange: this.handleChange('interval'),
        helperText: "Enter the interval in years. Leave it blank to omit the time markers."
      }), /*#__PURE__*/_react["default"].createElement(_FormLabel["default"], {
        component: "label",
        htmlFor: "startYear"
      }, "Start year (optional)"), /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
        id: "startYear",
        type: "number",
        style: styles.input,
        value: startYear,
        onChange: this.handleChange('startYear'),
        helperText: "Enter the start year for the time markers."
      }), /*#__PURE__*/_react["default"].createElement(_FormLabel["default"], {
        component: "legend"
      }, "Alignment"), /*#__PURE__*/_react["default"].createElement(_RadioGroup["default"], {
        "aria-label": "alignment",
        name: "alignment",
        value: alignment,
        onChange: this.handleAlignmentChange,
        required: true
      }, /*#__PURE__*/_react["default"].createElement(_FormControlLabel["default"], {
        value: "left",
        control: /*#__PURE__*/_react["default"].createElement(_Radio["default"], null),
        label: "Left"
      }), /*#__PURE__*/_react["default"].createElement(_FormControlLabel["default"], {
        value: "right",
        control: /*#__PURE__*/_react["default"].createElement(_Radio["default"], null),
        label: "Right"
      }), /*#__PURE__*/_react["default"].createElement(_FormControlLabel["default"], {
        value: "center",
        control: /*#__PURE__*/_react["default"].createElement(_Radio["default"], null),
        label: "Center"
      })));
    }
  }]);

  return TimelineEditor;
}(_react["default"].Component);

_defineProperty(TimelineEditor, "propTypes", {});

var _default = TimelineEditor;
exports["default"] = _default;