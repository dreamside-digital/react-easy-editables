"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _axios = _interopRequireDefault(require("axios"));

var _Timeline = _interopRequireDefault(require("react-gsheets-timeline/dist/es/Timeline"));

var _Editable = _interopRequireDefault(require("./Editable"));

var _TimelineEditor = _interopRequireDefault(require("../editingTools/TimelineEditor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EditableTimeline = function EditableTimeline(_ref) {
  var content = _ref.content,
      onSave = _ref.onSave,
      apiKey = _ref.apiKey,
      config = _ref.config,
      rest = _objectWithoutProperties(_ref, ["content", "onSave", "apiKey", "config"]);

  var handleSave = function handleSave(newContent) {
    onSave(newContent);
  };

  var sheets = content.timelines ? content.timelines.split(",").map(function (s) {
    return s.trim();
  }) : [];
  return /*#__PURE__*/_react["default"].createElement(_Editable["default"], _extends({
    Editor: _TimelineEditor["default"],
    handleSave: handleSave,
    content: content
  }, rest), /*#__PURE__*/_react["default"].createElement(_Timeline["default"], {
    spreadsheetId: content.spreadsheetId,
    sheets: sheets,
    alignment: content.alignment,
    interval: content.interval,
    startYear: content.startYear,
    apiKey: apiKey,
    config: config
  }));
};

EditableTimeline.propTypes = {
  content: _propTypes["default"].shape({
    spreadsheetId: _propTypes["default"].string.isRequired,
    timelines: _propTypes["default"].string.isRequired,
    alignment: _propTypes["default"].string,
    interval: _propTypes["default"].string,
    startYear: _propTypes["default"].string
  }).isRequired,
  config: _propTypes["default"].object,
  onSave: _propTypes["default"].func.isRequired,
  apiKey: _propTypes["default"].string.isRequired
};
EditableTimeline.defaultProps = {
  content: {
    spreadsheetId: '1vieT0gVrDOHAvAUW8uUWQZj2heeJr8Xg6bZbvKkFFbQ',
    timelines: "Toy Story Movies, Jurassic Park Movies, Spiderman Movies"
  },
  onSave: function onSave(newContent) {
    return console.log('Implement a function to save changes!', newContent);
  }
};
var _default = EditableTimeline;
exports["default"] = _default;