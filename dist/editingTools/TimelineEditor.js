"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Input = _interopRequireDefault(require("@material-ui/core/Input"));

var _Radio = _interopRequireDefault(require("@material-ui/core/Radio"));

var _RadioGroup = _interopRequireDefault(require("@material-ui/core/RadioGroup"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _FormLabel = _interopRequireDefault(require("@material-ui/core/FormLabel"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  header: {
    display: "flex"
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
  },
  container: {
    padding: '0.5rem'
  },
  radioFormLabel: {
    paddingBottom: '4px'
  },
  radioButton: {
    padding: '4px',
    paddingLeft: '9px'
  }
};

var TimelineEditor = function TimelineEditor(_ref) {
  var content = _ref.content,
      onContentChange = _ref.onContentChange;

  var handleChange = function handleChange(id) {
    return function (event) {
      var value = event.currentTarget.value;
      onContentChange(_objectSpread({}, content, _defineProperty({}, id, value)));
    };
  };

  var spreadsheetId = Boolean(content) ? content.spreadsheetId : '';
  var apiKey = Boolean(content) ? content.apiKey : '';
  var timelines = Boolean(content) ? content.timelines : '';
  var alignment = Boolean(content) ? content.alignment : 'left';
  var interval = Boolean(content) ? content.interval : '';
  var startYear = Boolean(content) ? content.startYear : '';
  return /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    spacing: 1,
    style: styles.container
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    id: "spreadsheetId",
    label: "Google spreadsheet ID",
    style: styles.textField,
    value: spreadsheetId,
    onChange: handleChange(spreadsheetId),
    helperText: "Enter the ID of the Google Spreadsheet (the part of the url that comes after https://docs.google.com/spreadsheets/d/)",
    required: true,
    variant: "outlined",
    size: "small",
    margin: "dense",
    InputProps: {
      style: styles.input
    }
  })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    id: "timelines",
    label: "Sheet titles",
    style: styles.textField,
    value: timelines,
    onChange: handleChange('timelines'),
    helperText: "Enter the titles of the spreadsheet tabs, separated by commas.",
    placeholder: "Sheet1, Sheet2, Sheet3",
    required: true,
    variant: "outlined",
    size: "small",
    margin: "dense",
    InputProps: {
      style: styles.input
    }
  })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12,
    sm: 6,
    md: 4
  }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    id: "interval",
    type: "number",
    label: "Time marker interval (optional)",
    style: styles.textField,
    value: interval,
    onChange: handleChange('interval'),
    helperText: "Enter the interval in years. Leave it blank to omit the time markers.",
    variant: "outlined",
    size: "small",
    margin: "dense",
    InputProps: {
      style: styles.input
    }
  })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12,
    sm: 6,
    md: 4
  }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    id: "startYear",
    label: "Start year (optional)",
    type: "number",
    style: styles.textField,
    value: startYear,
    onChange: handleChange('startYear'),
    helperText: "Enter the start year for the time markers.",
    variant: "outlined",
    size: "small",
    margin: "dense",
    InputProps: {
      style: styles.input
    }
  })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12,
    sm: 6,
    md: 4
  }, /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
    component: "fieldset"
  }, /*#__PURE__*/_react["default"].createElement(_FormLabel["default"], {
    component: "legend",
    style: styles.radioFormLabel
  }, "Alignment"), /*#__PURE__*/_react["default"].createElement(_RadioGroup["default"], {
    "aria-label": "alignment",
    name: "alignment",
    value: alignment,
    onChange: handleChange('alignment'),
    required: true
  }, /*#__PURE__*/_react["default"].createElement(_FormControlLabel["default"], {
    value: "left",
    control: /*#__PURE__*/_react["default"].createElement(_Radio["default"], {
      size: "small",
      style: styles.radioButton
    }),
    label: "Left"
  }), /*#__PURE__*/_react["default"].createElement(_FormControlLabel["default"], {
    value: "right",
    control: /*#__PURE__*/_react["default"].createElement(_Radio["default"], {
      size: "small",
      style: styles.radioButton
    }),
    label: "Right"
  }), /*#__PURE__*/_react["default"].createElement(_FormControlLabel["default"], {
    value: "center",
    control: /*#__PURE__*/_react["default"].createElement(_Radio["default"], {
      size: "small",
      style: styles.radioButton
    }),
    label: "Center"
  })))));
};

TimelineEditor.propTypes = {
  content: _propTypes["default"].object.isRequired,
  onContentChange: _propTypes["default"].func.isRequired
};
TimelineEditor.defaultProps = {
  content: {
    spreadsheetId: '1vieT0gVrDOHAvAUW8uUWQZj2heeJr8Xg6bZbvKkFFbQ',
    timelines: "Toy Story Movies, Jurassic Park Movies, Spiderman Movies",
    apiKey: ""
  },
  onContentChange: function onContentChange(updated) {
    return console.log('Implement a function to save content changes.', updated);
  }
};
var _default = TimelineEditor;
exports["default"] = _default;