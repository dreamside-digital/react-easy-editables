'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextField = require('@material-ui/core/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _Input = require('@material-ui/core/Input');

var _Input2 = _interopRequireDefault(_Input);

var _Radio = require('@material-ui/core/Radio');

var _Radio2 = _interopRequireDefault(_Radio);

var _RadioGroup = require('@material-ui/core/RadioGroup');

var _RadioGroup2 = _interopRequireDefault(_RadioGroup);

var _FormControlLabel = require('@material-ui/core/FormControlLabel');

var _FormControlLabel2 = _interopRequireDefault(_FormControlLabel);

var _FormLabel = require('@material-ui/core/FormLabel');

var _FormLabel2 = _interopRequireDefault(_FormLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var TimelineEditor = function (_React$Component) {
  _inherits(TimelineEditor, _React$Component);

  function TimelineEditor(props) {
    _classCallCheck(this, TimelineEditor);

    var _this = _possibleConstructorReturn(this, (TimelineEditor.__proto__ || Object.getPrototypeOf(TimelineEditor)).call(this, props));

    _this.handleChange = function (id) {
      return function (event) {
        var value = event.currentTarget.value;
        _this.setState({ content: _extends({}, _this.state.content, _defineProperty({}, id, value)) });
      };
    };

    _this.handleSpreadsheetIdChange = function (event) {
      var spreadsheetId = event.currentTarget.value;
      _this.setState({ content: _extends({}, _this.state.content, { spreadsheetId: spreadsheetId }) });
    };

    _this.handleTimelinesChange = function (event) {
      var timelines = event.currentTarget.value;
      _this.setState({ content: _extends({}, _this.state.content, { timelines: timelines }) });
    };

    _this.handleAlignmentChange = function (event) {
      var alignment = event.currentTarget.value;
      _this.setState({ content: _extends({}, _this.state.content, { alignment: alignment }) });
    };

    _this.state = { content: _this.props.content };
    return _this;
  }

  _createClass(TimelineEditor, [{
    key: 'render',
    value: function render() {
      var spreadsheetId = Boolean(this.state.content) ? this.state.content.spreadsheetId : '';
      var timelines = Boolean(this.state.content) ? this.state.content.timelines : '';
      var alignment = Boolean(this.state.content) ? this.state.content.alignment : 'left';
      var interval = Boolean(this.state.content) ? this.state.content.interval : '';
      var startYear = Boolean(this.state.content) ? this.state.content.startYear : '';

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _FormLabel2.default,
          { component: 'label', htmlFor: 'speadsheetId' },
          'Google spreadsheet ID'
        ),
        _react2.default.createElement(_TextField2.default, {
          id: 'spreadsheetId',
          style: styles.input,
          value: spreadsheetId,
          onChange: this.handleChange(spreadsheetId),
          helperText: 'Enter the ID of the Google Spreadsheet (the part of the url that comes after https://docs.google.com/spreadsheets/d/)',
          required: true
        }),
        _react2.default.createElement(
          _FormLabel2.default,
          { component: 'label', htmlFor: 'timelines' },
          'Sheet titles'
        ),
        _react2.default.createElement(_TextField2.default, {
          id: 'timelines',
          style: styles.input,
          value: timelines,
          onChange: this.handleChange('timelines'),
          helperText: 'Enter the titles of the spreadsheet tabs, separated by commas.',
          placeholder: 'Sheet1, Sheet2, Sheet3',
          required: true
        }),
        _react2.default.createElement(
          _FormLabel2.default,
          { component: 'label', htmlFor: 'interval' },
          'Time marker interval (optional)'
        ),
        _react2.default.createElement(_TextField2.default, {
          id: 'interval',
          type: 'number',
          style: styles.input,
          value: interval,
          onChange: this.handleChange('interval'),
          helperText: 'Enter the interval in years. Leave it blank to omit the time markers.'
        }),
        _react2.default.createElement(
          _FormLabel2.default,
          { component: 'label', htmlFor: 'startYear' },
          'Start year (optional)'
        ),
        _react2.default.createElement(_TextField2.default, {
          id: 'startYear',
          type: 'number',
          style: styles.input,
          value: startYear,
          onChange: this.handleChange('startYear'),
          helperText: 'Enter the start year for the time markers.'
        }),
        _react2.default.createElement(
          _FormLabel2.default,
          { component: 'legend' },
          'Alignment'
        ),
        _react2.default.createElement(
          _RadioGroup2.default,
          { 'aria-label': 'alignment', name: 'alignment', value: alignment, onChange: this.handleAlignmentChange, required: true },
          _react2.default.createElement(_FormControlLabel2.default, { value: 'left', control: _react2.default.createElement(_Radio2.default, null), label: 'Left' }),
          _react2.default.createElement(_FormControlLabel2.default, { value: 'right', control: _react2.default.createElement(_Radio2.default, null), label: 'Right' }),
          _react2.default.createElement(_FormControlLabel2.default, { value: 'center', control: _react2.default.createElement(_Radio2.default, null), label: 'Center' })
        )
      );
    }
  }]);

  return TimelineEditor;
}(_react2.default.Component);

TimelineEditor.propTypes = {};
exports.default = TimelineEditor;